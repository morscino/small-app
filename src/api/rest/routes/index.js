import todoRouter from './todo.route.js';

// route objects registers all application routes
const route = (app) => {
  app.use('/todo', todoRouter);

};

export default route;