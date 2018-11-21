const mongoose = require('mongoose');

require('../models');

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true
}, (err) => {
  if (err) throw err;
});