import express from 'express';
import { MessageRouters } from '../modules/messages/message.route';
import { NotificationsRouters } from '../modules/notification/notification.route';
import { AuthRouters } from '../modules/auth/auth.routes';
import { AssetRouters } from '../modules/asset/asset.route';
import { UserRouters } from '../modules/user/user.routes';
import { TodoRouters } from '../modules/todo/todo.route';
const router = express.Router();

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRouters,
    },
    {
        path: '/users',
        route: UserRouters,
    },
    {
        path: '/messages',
        route: MessageRouters,
    },
    {
        path: '/notifications',
        route: NotificationsRouters,
    },
    {
        path: '/assets',
        route: AssetRouters,
    },
    {
        path: '/todos',
        route: TodoRouters,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
