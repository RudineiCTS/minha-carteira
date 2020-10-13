import bcrypt from 'bcrypt';

class Bcrypt {
  async hash(password: string): Promise<string> {
    const hashed = await bcrypt.hash(password, 10);

    return hashed;
  }

  async compare(password: string, passwordCompare: string): Promise<boolean> {
    const passwordMatch = bcrypt.compare(password, passwordCompare);

    return passwordMatch;
  }
}
export default Bcrypt;
