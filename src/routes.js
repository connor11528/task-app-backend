const api = require('./api');

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
    method: 'GET',
    path: '/api/task/{task}',
    options: api.task.get
  },
  {
    method: 'POST',
    path: '/api/task',
    options: api.task.create
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
  {
    method: 'POST',
    path: '/api/register',
    options: api.user.register
  },
  {
    method: 'POST',
    path: '/api/login',
    options: api.user.login
  }
];

module.exports = routes;