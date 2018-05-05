const uniqueValidator = require('mongoose-unique-validator');
//const bcrypt = require('bcrypt-as-promised');
const bcrypt = require('bcrypt');
const validator = require('validator');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    username:{
        type:String,
        required : true,
        trim:true,
        unique: true, //unique index for the String
    },
    email:{
        type: String,
        required: true,
        trim:true,
        unique: true,
        validate:{//custom validation
            validator(value){
                return validator.isEmail(value);
            }
        }
    },
    password:{
        type:String,
        required: true,
    }
},{
    timestamps:true
  }
);

//use this middleware
userSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' });


userSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
      return next();
    }
  
    bcrypt
      .hash(this.password, 10)
      .then(hashedPassword => {
        this.password = hashedPassword;
        next();
      })
      .catch(next);
  });

//bcrypt
// userSchema.pre('save', function(next){
//     //check if the pw is already encrypted
//     console.log('presave');
//     if (!this.isModified('password')){
//         console.log('check for if password was modified');
//         return next();
//     }

//     if (bcrypt.hash(this.password, 10)){
//         console.log('bcrypthash');
//         (hashedPassword)=>{
//             this.password = hashedPassword;
//             //return next();
//             next();
//         }}
//         else{
//             console.log('bcypthash else');
//             //return next();
//             next();
//         }
//     });

//log back in , validate pw
userSchema.statics.validatePassword = function(candidatePassword, hashedPassword){
    return bcrypt.compare(candidatePassword, hashedPassword);
};

module.exports = mongoose.model('User', userSchema);