const api = require('./../api');

const routes = [
  {
    method: 'GET',
    path: '/api',
    handler: (request, h) => {
      return {success: true};
    }
  },
  {
    method: 'GET',
    path: '/api/task',
    options: api.task.all
  },
  {
    method: 'POST',
    path: '/api/task',
    options: api.task.create
  },
  {
    method: 'GET',
    path: '/api/task/{task}',
    handler: (request, h) => {
      const task = request.params.task;

      //todo: return the specified task
    }
  },
  {
    method: 'PUT',
    path: '/api/task/{task}',
    handler: (request, h) => {
      const task = request.params.task;
      const updates = request.payload;

      //todo: update the task
    }
  },
  {
    method: 'DELETE',
    path: '/api/task/{task}',
    handler: (request, h) => {
      const task = request.params.task;

      //todo: delete the task
    }
  },
];

module.exports = routes;