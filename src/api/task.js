const {Task} = require('./../models');
const Boom = require('boom');

const taskApi = {
  all: {
    async handler(request, h) {
      try {
        return await Task.find({});
      } catch (err) {
        Boom.badImplementation(err);
      }
    }
  },
  create: {
    async handler(request, h) {
      try {
        const task = await new Task({
          name: request.payload.name,
          description: request.payload.description
        });

        return { message: "Task created successfully", task };
      } catch (err) {
        Boom.badImplementation(err);
      }
    }
  }
};

module.exports = taskApi;