import express from 'express';
import TodoController from '../controllers/todo.controller.js';
import { createTodoValidator,idValidator, updateTodoValidator } from '../../../middleware/validate.js';

/**
 * All Todo Routes
 */
const todoRouter = express.Router();

todoRouter.post('/',createTodoValidator,TodoController.createTodo);
todoRouter.get('/',TodoController.getAllTodo);
todoRouter.get('/:id',idValidator,TodoController.getSingleTodo);
todoRouter.get('/:id',idValidator,TodoController.deleteTodo);
todoRouter.patch('/:id',updateTodoValidator,TodoController.updateTodo);


export default todoRouter;
