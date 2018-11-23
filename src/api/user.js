const _            = require('lodash');
const utils        = require('../utils');
const Boom         = require('boom');
const jsonwebtoken = require('jsonwebtoken');
const { User }     = require('./../models');


const userApi = {
  register: {
    auth: false,
    async handler(request, h) {
      try {
        const { email, password } = request.payload;

        const existingUser = await User.findOne({
          email: email
        });

        if(existingUser) {
          return Boom.methodNotAllowed('We already have a user with that email');
        }

        const user = await new User({ email, password });

        user.save();

        utils.sendVerificationEmail(user);

        return { message: "User created successfully. Please check your email", user };

      } catch (err) {
        Boom.badImplementation(err);
      }
    }
  },
  login: {
    auth: false,
    async handler(request, h) {
      try {
        const { email, password } = request.payload;
        let user                  = await User.findOne({ email });
        const passwordMatch       = await utils.comparePassword(password, user.password);

        if(!passwordMatch){
          return Boom.badRequest('Password does not match');
        }

        if(!user.active){
          // todo: check that they've activated their account
          // Boom.badRequest('Check your email to activate your account');
        }

        const token = jsonwebtoken.sign(user.email, process.env.SECRET_KEY);

        user = user.toObject();
        delete user.password;

        return {
          token,
          user
        };

      } catch (err) {
        console.log(err);
        Boom.badImplementation(err);
      }
    }
  }
}

module.exports = userApi;