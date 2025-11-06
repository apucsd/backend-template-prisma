import express from 'express';
import { MessageRouters } from '../modules/Messages/message.route';
import { NotificationsRouters } from '../modules/Notification/notification.route';
import { AuthRouters } from '../modules/auth/auth.routes';
import { AssetRouters } from '../modules/Asset/asset.route';
import { UserRouters } from '../modules/user/user.routes';
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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
