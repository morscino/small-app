import { body,param } from 'express-validator';
import { TodoStatus } from '../constants/index.js';

// createTodoValidator sets validation rules for create todo request
export const createTodoValidator = [
  body('title', 'title cannot be be empty').not().isEmpty(),
  body('title', 'title must be at least 3 characters and cannot be more than 50 characters').isLength({ min: 3, max: 50 }),

  body('description', 'description cannot be be empty').not().isEmpty(),
  body('description', 'description must be at least 3 characters and cannot be more than 100 characters').isLength({ min: 3, max: 100 }),
];

// updateTodoValidator sets validation rules for update todo request
export const updateTodoValidator = [
  body('title', 'title must be at least 3 characters and cannot be more than 50 characters').optional({nullable:true}).isLength({ min: 3, max: 50 }),
  body('description', 'description must be at least 3 characters and cannot be more than 100 characters').optional({nullable:true}).isLength({ min: 3, max: 100 }),
  body('status', 'invalid status').optional({nullable:true}).isIn([TodoStatus.Completed,TodoStatus.InProgress]),
];

// idValidator sets validation rules to validate an id parameter
export const idValidator = [
  param('id','invalid id parameter').notEmpty(),
  param('id','id must be a valid uuid string').isUUID()
];