import mongoose from 'mongoose';

interface UserInterface {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
}
export default UserInterface;
