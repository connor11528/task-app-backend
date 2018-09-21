const mongoose = require('mongoose');

require('../models');

mongoose.connect('mongodb://localhost/hapi-mongodb-starter', {
  useNewUrlParser: true
}, (err) => {
  if (err) throw err;
});