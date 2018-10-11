const mongoose = require('mongoose');

const taskModel = mongoose.Schema({
  name: {type: String, required: '{PATH} is required!'},
  description: {type: String},
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskModel);
