import FinanceRepository from '../repositories/financeRepository';


interface RequestDTO{
  frequency: string,
  type: string,
  user_id:{
    iat: number,
    exp: number,
    sub: string,
  }
}

class MovimentIndex{
  financeRepository;
  constructor(Repository: FinanceRepository){
  this.financeRepository = Repository;
  }

  async execute(data: RequestDTO){
    const {type, frequency}= data;
    const user_id= data.user_id.sub;


    const movimentList = await this.financeRepository.list(user_id,frequency, type);

    return movimentList;

  }
}
export default MovimentIndex;
