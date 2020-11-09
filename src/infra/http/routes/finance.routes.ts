import { Router } from 'express';

import MovimentController from '../../../modules/finance/controller/MovimentController';
import authenticated from '../middleware/authenticated';

const financeRoutes = Router();

financeRoutes.post('/entry', authenticated, MovimentController.create);

export default financeRoutes;
