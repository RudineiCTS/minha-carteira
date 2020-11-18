import { Request, Response } from 'express';

import FinanceRepository from '../repositories/financeRepository';
import MovimentRegister from '../services/MovimentRegister';
import MovimentIndex from '../services/MovimentIndex';


class MovimentController {
  async create(request: Request, response: Response) {
    const {title, type, date, frequency, amount, description}= request.body;

    if (!title) return response.json({ error: 'title is missing' });
    if (!type) return response.json({ error: 'type is missing' });
    if (!date) return response.json({ error: 'date is missing' });
    if (!frequency) return response.json({ error: 'frequency is missing' });
    if (!amount) return response.json({ error: 'amount is missing' });
    if (!description) return response.json({ error: 'description is missing' });

    const financeRepository = new FinanceRepository();
    const movimentRegister = new MovimentRegister(financeRepository);


    const moviment = await movimentRegister.execute({...request.body,
    user_id: request.user.id});
    return response.json(moviment);

  }
  async index(request:Request, response:Response){
  const {type, frequency} = request.query;

  if(!type) return response.json({message: "selecione um tipo"})
  if(!frequency) return response.json({message: "selecione uma frequencia"})


  const financeRepository = new FinanceRepository();
  const movimentIndex = new MovimentIndex(financeRepository);

  const typeFormated = String(type);
  const frequencyFormated = String(frequency);

  const movimentList = await movimentIndex.execute({
    type: typeFormated,
    frequency:frequencyFormated,
    user_id: request.user.id
  })

  return response.json(movimentList);

  }
}
export default new MovimentController();
