import bcrypt from 'bcrypt';

class Bcrypt {
  async hash(password: string): Promise<string> {
    const hashed = await bcrypt.hash(password, 10);

    return hashed;
  }
}
export default Bcrypt;
