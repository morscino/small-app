import { prisma } from '../database/prisma/prisma.js';
import { TodoStatus } from '../constants/index.js';
import { Utils } from '../helpers/utils.js';
import slug from 'slug';

/**
 * 
 * TodoService is the class that interfaces between the
 * TodoController and the data repository.
 * It also handles all the Todo business logic
 */
class TodoService {

  /**
     * createTodo receives data from the TodoController,
     * performs business logic on the date and passes it to 
     * the data repository for creation of a new Todo.
     */
  async createTodo(input) {
    const data = {
      'title': input.title,
      'status': TodoStatus.Pending,
      'slug': Utils.toSlug(input.title),
      'description': input.description
    };
    return await prisma.todos.create({
      data: {
        ...data
      }
    });
  }

  /**
     * getAllTodo fetches all created todos form the 
     * data repository.
     */
  async getAllTodo() {
    return prisma.todos.findMany();
  }

  /**
     * getSingleTodo fetches a single Todo from the database with the passed
     * todo id argument
     */
  async getSingleTodo(id) {
    return await prisma.todos.findUnique({
      where: {
        id
      },
    });
  }

  /**
     * updateTodo updates a single Todo with the data passed,
     * where the id is equal to the id passed as argument.
     */
  async updateTodo(id, data) {
    if (data.title) {
      data.slug = slug(data.title);
    }
    return await prisma.todos.update({
      where: {
        id
      },
      data
    });
  }

  /**
     * deleteTodo deletes a single Todo whose id
     * matches the id passes as argument from the database.
     */
  async deleteTodo(id) {
    return await prisma.user.delete({
      where: {
        id
      },
    });
  }

}

export default new TodoService();