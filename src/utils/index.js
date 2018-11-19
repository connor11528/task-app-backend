const Promise          = require('bluebird');
const bcrypt           = require('bcrypt');

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
};

module.exports = utils;