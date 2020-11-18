import databaseconnection from '../../../infra/database/mongoose';
import MovimentModel from '../model/MovimentModel';

interface MovimentDTO{
  user_id:string;
  title: string;
  type: string;
  date: Date;
  frequency: string;
  amount: string;
  description: string;
}

class financeRepository {
  async add(
    MovimentDataRequest: MovimentDTO,
  ): Promise<MovimentModel> {
    const movimentData = MovimentDataRequest;
    const moviment = await databaseconnection
      .collection('moviment')
      .insertOne(movimentData);

    const movimentFomated = { ...moviment.ops[0], id: moviment.ops[0]._id };
    delete movimentFomated._id

    return movimentFomated;
  }
}
export default financeRepository;
