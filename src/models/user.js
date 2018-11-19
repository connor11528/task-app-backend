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
    required: '{PATH} is required!' 
  },
  active: { 
    type: Boolean, 
    default: false 
  }
}, {
  timestamps: true
});

userModel.pre('save', function(next) {
    var user = this;

    if (!user.isModified('password')){
        console.log('user has not modified password');

        return next();
    }

    utils.hashPassword(this.password)
        .then((res)=>{
            console.log('After hashed password');
            console.log(res);
        })
        .catch(e => console.error(e));


});

module.exports = mongoose.model('User', userModel);
