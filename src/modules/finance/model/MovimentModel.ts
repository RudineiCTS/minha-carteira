import mongoose from 'mongoose';

 interface MovimentModel{
  id: mongoose.Types.ObjectId;
  title: string;
  type: string;
  date: Date;
  frequency: string;
  amount: string;
  description: string;
  user_id?:string;
}

export default MovimentModel;
