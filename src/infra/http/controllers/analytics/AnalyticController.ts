import { Request, Response } from 'express';
import { injectable } from 'tsyringe';

@injectable()
export class AnalyticController {
  async getDayData(request: Request, response: Response) {
    const result = {};
    return response.status(201).json(result);
  }
}
