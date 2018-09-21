const mongoose = require('mongoose');

const taskModel = mongoose.Schema({
  name: {type: String, required: '{PATH} is required!'},
  description: {type: String, required: '{PATH} is required!'},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: null}
});

module.exports = mongoose.model('Task', taskModel);
