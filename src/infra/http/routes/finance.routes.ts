import { Router } from 'express';

import MovimentController from '../../../modules/finance/controller/MovimentController';
import authenticated from '../middleware/authenticated';

const financeRoutes = Router();

financeRoutes.post('/entry', authenticated, MovimentController.create);
financeRoutes.get('/list', authenticated, MovimentController.index)

export default financeRoutes;
