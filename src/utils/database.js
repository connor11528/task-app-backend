const mongoose = require('mongoose');

require('../models');

mongoose.connect('mongodb://localhost/task-app-backend', {
  useNewUrlParser: true
}, (err) => {
  if (err) throw err;
});