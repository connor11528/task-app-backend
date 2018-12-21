const mongoose         = require('mongoose');
const utils            = require('./../utils');

const userModel = mongoose.Schema({
  email: { 
    type: String, 
    required: '{PATH} is required!', 
    index: { unique: true } 
  },
  password: { 
    type: String,
    default: null
  },
  active: { 
    type: Boolean, 
    default: false 
  }
}, {
  timestamps: true
});

userModel.pre('save', (next) => {
  var user = this;

  if (!this.password){
    next();
  } else {
    utils.hashPassword(this.password)
      .then((hash)=>{
        user.password = hash;
        next();
      })
      .catch(e => console.error(e));
  }


});

module.exports = mongoose.model('User', userModel);
