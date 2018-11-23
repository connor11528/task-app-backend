const Promise        = require('bluebird');
const bcrypt         = require('bcrypt');
const jsonwebtoken   = require('jsonwebtoken');
var mailgun          = require('mailgun.js');
var mg = mailgun.client({
  username: 'api', 
	key: process.env.MAILGUN_API_KEY
});


const utils = {
	hashPassword(password){
		return new Promise((resolve, reject) => {
			bcrypt.genSalt(10, (err, salt) => {
				if(err) {
					return reject(err);
				}
				
			  bcrypt.hash(password, salt, (err, hash) => {
			    if(err) {
			    	return reject(err);
			    }

			    return resolve(hash);
			  });

			});
		});
	},
	comparePassword(rawPassword, hashedPassword){
		return new Promise((resolve, reject) => {
			bcrypt.compare(rawPassword, hashedPassword, (error, response)=>{
				if(error){
					return reject(err);
				}

        return resolve(response);
			});
		});

	},
	sendVerificationEmail(user){
		// todo: send verification email with mailgun

    const token = jsonwebtoken.sign(user.email, process.env.SECRET_KEY);

    const verificationUrl = `${process.env.BASE_URL}/confirmation?token=${token}`;

    console.log(verificationUrl);
	}
};

module.exports = utils;