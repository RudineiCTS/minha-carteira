import { Router } from 'express';

import userRoutes from './users.routes';
import authenticRoutes from './auth.routes';
import financeRoutes from './finance.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sigin', authenticRoutes);
routes.use('/finance', financeRoutes);

export default routes;
