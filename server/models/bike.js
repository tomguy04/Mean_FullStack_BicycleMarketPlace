const mongoose = require('mongoose');
const { Schema } = mongoose;
//const uniqueValidator = require('mongoose-unique-validator');

const bikeSchema = new Schema({
    title: {
      type: String,
      trim: true,
      required: [true, 'title is required'],
      //unique: true
    },
    desc: {
      type: String,
      trim: true,
      maxlength: [200, 'description length must be less than 200'],
    },
    price:{
      type: Number,
      trim: true,
      //needs a minimum value of $1
    },

  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Bike', bikeSchema);

