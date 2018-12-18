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
    method: 'POST',
    path: '/api/register',
    options: api.user.register
  },
  {
    method: 'GET',
    path: '/api/confirmation',
    options: api.user.confirmation
  },
  {
    method: 'POST',
    path: '/api/login',
    options: api.user.login
  },
  {
    method: 'GET',
    path: '/api/tasks',
    options: api.task.all
  },
  {
    method: 'GET',
    path: '/api/tasks/{task}',
    options: api.task.get
  },
  {
    method: 'POST',
    path: '/api/tasks',
    options: api.task.create
  },
  {
    method: 'PUT',
    path: '/api/task/{task}',
    options: api.task.update
  },
  {
    method: 'DELETE',
    path: '/api/tasks/{task}',
    options: api.task.remove
  },
];

module.exports = routes;