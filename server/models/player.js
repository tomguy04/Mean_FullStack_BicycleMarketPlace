const mongoose = require('mongoose');
const { Schema } = mongoose;
//const uniqueValidator = require('mongoose-unique-validator');

const playerSchema = new Schema({
    TeamName: {
      type: String,
      trim: true,
      required: [true, 'TeamName content is required'],
      minlength: [2, 'TeamName Content length must be greater than 2'],
      //unique: true
    },
    PreferredPosition: {
      type: String,
      trim: true,
    },
    game1: {
      type: String,
      trim: true,
      default: 'undecided'
    },
    game2: {
      type: String,
      trim: true,
      default: 'undecided'
    },
    game3: {
      type: String,
      trim: true,
      default: 'undecided'
    },
  }, {
    timestamps: true
  });

  //noteSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
  //const Task = mongoose.model('Task', taskSchema);
  module.exports = mongoose.model('Player', playerSchema);
