
import Response from '../../../helpers/response.js';
import { Messages, StatusCodes } from '../../../constants/index.js';
import todoService from '../../../services/todo.service.js';
import { validationResult } from 'express-validator';
import { logger } from '../../../helpers/logger.js';


/**
 * TodoController handles all todo requests from the
 * routes, send sends to the service, and returns the necessary
 * http response.
 */
class TodoController {

  /**
     * Creates a new todo
     * @param {express.req} req 
     * @param {express.res} res 
     * @returns todo
     */
  async createTodo(req, res) {
    // validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return await Response.error(res, StatusCodes.StatusBadRequest, Messages.BadRequest, errors.array());

    }
    // in case request params meet the validation criteria
    try {
      const newTodo = await todoService.createTodo(req.body);
      logger.info('todo successfully created');
      return await Response.success(res, StatusCodes.StatusOk, Messages.Success, newTodo);
    } catch (error) {
      logger.error(`${Messages.ServerError}: TodoController: createTodo`, error);
      return await Response.error(res, StatusCodes.StatusServerError, Messages.ServerError, Messages.SomethingWentWrong);
    }

  }

  /**
     * Gets all todos
     * @param {express.req} req 
     * @param {express.res} res 
     * @returns todo[]
     */
  async getAllTodo(req, res) {
    try {
      const todos = await todoService.getAllTodo();
      logger.info('todos successfully fetched');
      return await Response.success(res, StatusCodes.StatusOk, Messages.Success, todos);
    } catch (error) {
      logger.error(`${Messages.ServerError}: TodoController : getAllTodo`, error);
      return await Response.error(res, StatusCodes.StatusServerError, Messages.ServerError, Messages.SomethingWentWrong);
    }
  }

  /**
     * Gets a single todo
     * @param {express.req} req 
     * @param {express.res} res 
     * @returns todo
     */
  async getSingleTodo(req, res) {
    // validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return await Response.error(res, StatusCodes.StatusBadRequest, Messages.BadRequest, errors.array());

    }
    // get id param
    const { id } = req.params;
    try {
      const todo = await todoService.getSingleTodo(id);
      logger.info('todo successfully fetched');
      return await Response.success(res, StatusCodes.StatusOk, Messages.Success, todo);
    } catch (error) {
      logger.error(`${Messages.ServerError}: TodoController : getSingleTodo`, error);
      return await Response.error(res, StatusCodes.StatusServerError, Messages.ServerError, Messages.SomethingWentWrong);
    }
  }

  /**
     * Updates a todo
     * @param {express.req} req 
     * @param {express.res} res 
     * @returns todo
     */
  async updateTodo(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return await Response.error(res, StatusCodes.StatusBadRequest, Messages.BadRequest, errors.array());

    }

    const { id } = req.params;
    const input = req.body;
    try {
      const todo = await todoService.updateTodo(id, input);
      logger.info('todos successfully updated');
      return await Response.success(res, StatusCodes.StatusOk, Messages.Success, todo);
    } catch (error) {
      logger.error(`${Messages.ServerError}: TodoController : updateTodo`, error);
      return await Response.error(res, StatusCodes.StatusServerError, Messages.ServerError, Messages.SomethingWentWrong);
    }
  }

  /**
     * Deletes a new todo
     * @param {express.req} req 
     * @param {express.res} res 
     * @returns todo
     */
  async deleteTodo(req, res) {
    // validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return await Response.error(res, StatusCodes.StatusBadRequest, Messages.BadRequest, errors.array());

    }
    // fetch id param
    const { id } = req.params;

    try {
      const todo = await todoService.deleteTodo(id);
      logger.info('todos successfully deleted');
      return await Response.success(res, StatusCodes.StatusOk, Messages.Success, todo);
    } catch (error) {
      logger.error(`${Messages.ServerError}: TodoController : deleteTodo`, error);
      return await Response.error(res, StatusCodes.StatusServerError, Messages.ServerError, Messages.SomethingWentWrong);
    }
  }

}

export default new TodoController();