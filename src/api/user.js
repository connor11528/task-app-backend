const { User } = require('./../models');
const Boom = require('boom');

const userApi = {
  register: {
    async handler(request, h) {
      try {      	

      	// Create user
        const task = await new User({
          email: request.payload.email,
          password: request.payload.password
        });
        task.save();

        return { message: "Task created successfully", task };

      } catch (err) {
        Boom.badImplementation(err);
      }
    }
  },
}

module.exports = userApi;