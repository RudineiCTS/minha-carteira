import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/minhacarteira', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const databaseconnection = mongoose.connection;

export default databaseconnection;
