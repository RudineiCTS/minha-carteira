import FinanceRepository from '../repositories/financeRepository';

interface requestDTO{
  title: string;
  type: string;
  date: Date;
  frequency: string;
  amount: string;
  description: string;
  user_id:{
    iat: number,
    exp: number,
    sub: string,
  }
}


class MovimentRegister {
  financeRepository;

  constructor(Repository: FinanceRepository){
    this.financeRepository = Repository;
  }
  async execute(data: requestDTO) {
    const {title, type, date, frequency, amount, description, user_id} = data;

    const moviment = await this.financeRepository.add({
      title,
      type,
      date,
      frequency,
      amount,
      description,
      user_id: user_id.sub });

      return moviment;

  }
}
export default MovimentRegister;
