const Promise      = require('bluebird');
const bcrypt       = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const emails       = require('./emails');

const utils = {
  hashPassword(password) {
    return new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          return reject(err);
        }

        bcrypt.hash(password, salt, (err, hash) => {
          if (err) {
            return reject(err);
          }

          return resolve(hash);
        });

      });
    });
  },

  comparePassword(rawPassword, hashedPassword) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(rawPassword, hashedPassword, (error, response) => {
        if (error) {
          return reject(error);
        }

        return resolve(response);
      });
    });

  },

  async sendVerificationEmail(user) {
    const token = jsonwebtoken.sign(user.email, process.env.SECRET_KEY);

    const verificationUrl = `http://${process.env.BASE_URL}/#/confirmation?token=${token}`;

    return await emails.sendEmail(user.email, {
      subject: 'Activate your account',
      text: `Please click verification url: ${verificationUrl}`
    });
  },

};

module.exports = utils;