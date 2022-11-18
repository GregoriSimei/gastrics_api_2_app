import { Request, Response } from 'express';
import { IGetCurrentCylinderData } from 'src/application/use-cases/analytics/IGetCurrentCylinderData';
import { inject, injectable } from 'tsyringe';

@injectable()
export class AnalyticController {
  constructor(
    @inject('IGetCurrentCylinderDataUseCase')
    private getCurrentCylinderDataUseCase: IGetCurrentCylinderData,
  ) {}

  async getDayData(request: Request, response: Response) {
    const exId = request.query.ex_id as string;
    const result = await this.getCurrentCylinderDataUseCase.execute(exId);
    return response.status(201).json(result);
  }
}
