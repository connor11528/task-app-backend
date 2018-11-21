const Promise        = require('bluebird');
const bcrypt         = require('bcrypt');
const mandrill       = require('mandrill-api/mandrill');
const mandrillClient = new mandrill.Mandrill(process.env.MANDRILL_API_KEY);

const utils = {
	hashPassword(password){
		return new Promise((resolve, reject) => {
			bcrypt.genSalt(10, (err, salt) => {
				if(err) return reject(err);
				
			    bcrypt.hash(password, salt, (err, hash) => {
			    	if(err) return reject(err);
			      	
			      	return resolve(hash);
			    });
			});
		});
	},
	sendVerificationEmail(user){
		// todo: send verification email with mandrill by mailchimp
	}
};

module.exports = utils;