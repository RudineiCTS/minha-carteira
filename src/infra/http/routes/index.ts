import { Router } from 'express';

import userRoutes from './users.routes';
import authenticRoutes from './auth.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sigin', authenticRoutes);

export default routes;
