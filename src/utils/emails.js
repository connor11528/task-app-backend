require('dotenv').config();

const Promise = require('bluebird');

const mailgun = require('mailgun-js')({
  apiKey: process.env.MAILGUN_API_KEY, 
  domain: process.env.MAILGUN_DOMAIN
});

module.exports = {
	sendEmail(recipient, message, attachment){
    return new Promise((resolve, reject) => {
      const data = {
        from: 'Connor Leech <connor@employbl.com>',
        to: recipient,
        subject: message.subject,
        text: message.text,
        inline: attachment,
        html: message.html,
      };

      mailgun.messages().send(data, (error) => {

        if (error) {
          console.log('error sending mail');
          console.log(error);
          return reject(error);
        }

        console.log('send was successful', data);

        return resolve();
      });
    });
  }
};