require('dotenv').config();

const utils = require('../utils');
const Boom = require('boom');
const jsonwebtoken = require('jsonwebtoken');
const {User} = require('./../models');

const userApi = {
  register: {
    auth: false,
    async handler(request, h) {
      try {
        const { email, password } = request.payload;

        const existingUser = await User.findOne({
          email
        });

        if (existingUser) {
          return Boom.badRequest('We already have a user with that email');
        }

        const user = new User({ email, password });

        await user.save();

        await utils.sendVerificationEmail(user);

        return { message: "Registration complete! Please check your email to verify your account" };

      } catch (err) {
        Boom.badImplementation(err);
      }
    }
  },
  confirmation: {
    auth: false,
    async handler(request, h) {
      const token = request.query.token;

      const email = jsonwebtoken.verify(token, process.env.SECRET_KEY);

      let user = await User.findOne({ email });

      if (!user || !token) {
        Boom.badRequest('Invalid token');
      }

      user.update({ active: true });

      return { success: true, message: 'Account successfully activated!' };
    }
  },
  login: {
    auth: false,
    async handler(request, h) {
      try {
        const {email, password} = request.payload;
        let user = await User.findOne({ email });

        if (!user) {
          return Boom.badRequest('No account with that email');
        }

        // if(!user.active){
        //   return Boom.badRequest('Your account isn\'t activated yet. Check your email!');
        // }

        const passwordMatch = await utils.comparePassword(password, user.password);

        if (!passwordMatch) {
          return Boom.badRequest('Password does not match');
        }

        const token = jsonwebtoken.sign(user.email, process.env.SECRET_KEY);

        user = user.toObject();

        delete user.password;

        return {
          token,
          user
        };

      } catch (err) {
        Boom.badImplementation(err);
      }
    }
  }
};

module.exports = userApi;