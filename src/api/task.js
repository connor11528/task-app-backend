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
  },
  get: {
    async handler(request, h) {
      try {

        const task = request.params.task;

        return await Task.findOne({
            _id: task.id
        });

      } catch (err) {
          Boom.badImplementation(err);
      }
    }
  },
  update: {
    async handler(request, h) {
      try {
        const task = request.params.task;
        const updates = request.payload;

        // todo

      } catch (err) {
          Boom.badImplementation(err);
      }
    }
  },
  remove: {
    async handler(request, h){
        try {
            const task = request.params.task;

            // todo

        } catch (err) {
            Boom.badImplementation(err);
        }
    }
  }
};

module.exports = taskApi;