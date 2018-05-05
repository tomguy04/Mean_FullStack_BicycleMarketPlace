const mongoose = require('mongoose');
const { Schema } = mongoose;
//const uniqueValidator = require('mongoose-unique-validator');

const bikeSchema = new Schema({
  //user_id: {type: String}
    title: {
      type: String,
      trim: true,
      required: [true, 'title is required'],
      //unique: true
    },
    description: {
      type: String,
      trim: true,
      required: [true, 'description is required'],
      maxlength: [200, 'description length must be less than 200'],
    },
    price:{
      type: Number,
      trim: true,
      required: [true, 'price is required'],
      //needs a minimum value of $1
    },
    location:{
      type: String,
      trim: true,
      required: [true, 'location is required'],
    },
    image:{
      type: String,
      trim: true,
      required: [true, 'image is required'],
    },
    

  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Bike', bikeSchema);

