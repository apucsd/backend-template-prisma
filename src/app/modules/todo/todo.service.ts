import { prisma } from '../../utils/prisma';
import { getSocket } from '../../utils/socket';
import { Todo } from './todo.interface';

const createTodoIntoDB = async (payload: Todo) => {
    const result = await prisma.todo.create({
        data: {
            title: payload.title,
            description: payload.description,
            completed: payload.completed,
            priority: payload.priority,
        },
    });

    return result;
};

const getAllTodosFromDB = async () => {
    const todos = await prisma.todo.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            completed: true,
            priority: true,
            assignedToUser: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                },
            },
        },
    });
    return todos;
};

const getMyTodosFromDB = async (userId: string) => {
    const todos = await prisma.todo.findMany({
        where: {
            assignedTo: userId,
        },
        select: {
            id: true,
            title: true,
            description: true,
            completed: true,
            priority: true,
            assignedToUser: {
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                },
            },
        },
    });
    return todos;
};

const updateTodoIntoDB = async (id: string, payload: Todo) => {
    const result = await prisma.todo.update({
        where: { id },
        data: {
            assignedTo: payload.assignedTo,
        },
    });
    const updatedTodo = await prisma.todo.findUnique({
        where: { id: result.id },
        include: {
            assignedToUser: true,
        },
    });
    const io = getSocket();
    if (payload.assignedTo) {
        io.to(payload.assignedTo).emit('todo', updatedTodo);
    }
    return result;
};

const deleteTodoIntoDB = async (id: string) => {
    const result = await prisma.todo.delete({
        where: { id },
    });
    return result;
};

export const TodoService = {
    createTodoIntoDB,
    getAllTodosFromDB,
    updateTodoIntoDB,
    deleteTodoIntoDB,
    getMyTodosFromDB,
};
