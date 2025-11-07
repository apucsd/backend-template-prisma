import { Router } from 'express';
import { TodoController } from './todo.controller';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { TodoValidation } from './todo.validation';
const router = Router();

router.post('/', auth('ANY'), validateRequest.body(TodoValidation.createTodoZodSchema), TodoController.createTodo);
router.patch('/:id', auth('ANY'), TodoController.updateTodo);
router.get('/', auth('ANY'), TodoController.getAllTodos);
router.get('/my-todos', auth('USER'), TodoController.getMyTodos);
router.delete('/:id', auth('ANY'), TodoController.deleteTodo);

export const TodoRouters = router;
