const { User } = require('./../models');
const Boom = require('boom');

const userApi = {
  register: {
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
}

module.exports = userApi;