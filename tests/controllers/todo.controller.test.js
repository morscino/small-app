import todoController from "../../src/api/rest/controllers/todo.controller.js";
import { mockRequest, mockResponse } from "../mocks/mock";
import { jest } from "@jest/globals";

describe("Check Class \'TodoController\' ", () => {
    test('should 200 and return correct value', async () => {
        let req = mockRequest();
        req.body = {
            title: 'test',
            description: 'just testing',
        };
        const res = mockResponse();

        await todoController.createTodo(req, res);

        expect(res.send).toHaveBeenCalledTimes(1)
        expect(res.send.mock.calls.length).toBe(1);
    });

  
});