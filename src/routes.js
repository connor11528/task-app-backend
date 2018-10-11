const api = require('./api');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return {success: true};
    }
  },
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
    options: api.task.get
  },
  {
    method: 'PUT',
    path: '/api/task/{task}',
    options: api.task.update
  },
  {
    method: 'DELETE',
    path: '/api/task/{task}',
    options: api.task.remove
  },
];

module.exports = routes;