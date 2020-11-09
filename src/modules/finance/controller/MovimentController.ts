import { Request, Response } from 'express';

class MovimentRegister {
  async create(request: Request, response: Response) {
    return response.json(request.body);
  }
}
export default new MovimentRegister();
