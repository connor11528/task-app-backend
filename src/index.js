const Hapi     = require('hapi');
const routes   = require('./routes');

require('./utils/database');

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  routes: { cors: true }
});

const startServer = async () => {
  try {
    routes.forEach((route)=>{
      server.route(route);
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
  } catch (err) {
    console.error(err);
  }
};

startServer();

module.exports = server;