import FinanceRepository from '../repositories/financeRepository';

// // interface RequestDTO{
// //   frequency: string,
// //   type: string
// // }

class MovimentIndex{
  financeRepository;
  constructor(Repository: FinanceRepository){
  this.financeRepository = Repository;
  }

  async execute(data: any){
    console.log(data);

  }
}
export default MovimentIndex;
