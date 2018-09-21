
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
    path: '/tasks',
    handler: (request, h) => {
      //todo: return all tasks
    }
  },
  {
    method: 'POST',
    path: '/tasks',
    handler: (request, h) => {
      //todo: create a task
    }
  },
  {
    method: 'GET',
    path: '/tasks/{task}',
    handler: (request, h) => {
      const task = request.params.task;

      //todo: return the specified task
    }
  },
  {
    method: 'PUT',
    path: '/tasks/{task}',
    handler: (request, h) => {
      const task = request.params.task;
      const updates = request.payload;

      //todo: update the task
    }
  },
  {
    method: 'DELETE',
    path: '/tasks/{task}',
    handler: (request, h) => {
      const task = request.params.task;

      //todo: delete the task
    }
  },
];

module.exports = routes;