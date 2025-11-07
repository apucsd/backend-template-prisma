import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TodoService } from './todo.service';

const createTodo = catchAsync(async (req, res) => {
    const result = await TodoService.createTodoIntoDB(req.body);
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Todo created successfully',
        data: result,
    });
});

const getAllTodos = catchAsync(async (req, res) => {
    const result = await TodoService.getAllTodosFromDB();
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Todos retrieved successfully',
        data: result,
    });
});

const getMyTodos = catchAsync(async (req, res) => {
    const result = await TodoService.getMyTodosFromDB(req.user.id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Todos retrieved successfully',
        data: result,
    });
});

const updateTodo = catchAsync(async (req, res) => {
    const result = await TodoService.updateTodoIntoDB(req.params.id, req.body);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Todo updated successfully',
        data: result,
    });
});
const deleteTodo = catchAsync(async (req, res) => {
    const result = await TodoService.deleteTodoIntoDB(req.params.id);
    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Todo deleted successfully',
        data: result,
    });
});

export const TodoController = {
    createTodo,
    getAllTodos,
    updateTodo,
    deleteTodo,
    getMyTodos,
};
