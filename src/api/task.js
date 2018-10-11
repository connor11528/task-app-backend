const {Task} = require('./../models');
const Boom = require('boom');

const taskApi = {
  all: {
    async handler(request, h) {
      try {
        return await Task.find({}).sort({ createdAt: 'desc' });

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
        task.save();

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
        return { success: true, message: 'Successfully updated task!' };

      } catch (err) {
          Boom.badImplementation(err);
      }
    }
  },
  remove: {
    async handler(request, h){
        try {
            const task = await Task.findById(request.params.task).remove();

            return { success: true, message: 'Successfully removed task!' };

        } catch (err) {
            Boom.badImplementation(err);
        }
    }
  }
};

module.exports = taskApi;