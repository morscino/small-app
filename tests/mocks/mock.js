import { jest } from "@jest/globals";


export const mockRequest = () => {
    const req = {}
    req.body = jest.fn().mockReturnValue(req)
    req.params = jest.fn().mockReturnValue(req)
    return req
};

export const mockResponse = () => {
    const res = {}
    res.send = jest.fn().mockReturnValue(res)
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
};

export const mockTodoService = ()=>{
    createTodo:jest.fn();
    getSingleTodo:jest.fn();
}
// mockNext: () => jest.fn()

