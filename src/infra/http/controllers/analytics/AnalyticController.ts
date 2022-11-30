import { Request, Response } from 'express';
import { IFindAnalyticsByBranch } from 'src/application/use-cases/analytics/branches/IFindAnalyticsByBranch';
import { IGetCurrentCylinderData } from 'src/application/use-cases/analytics/IGetCurrentCylinderData';
import { inject, injectable } from 'tsyringe';

@injectable()
export class AnalyticController {
  constructor(
    @inject('IGetCurrentCylinderDataUseCase')
    private getCurrentCylinderDataUseCase: IGetCurrentCylinderData,
    @inject('IFindAnalyticsByBranchUseCase')
    private findAnalyticsByBranchUseCase: IFindAnalyticsByBranch,
  ) {}

  async getDayData(request: Request, response: Response) {
    const exId = request.query.ex_id as string;
    const result = await this.getCurrentCylinderDataUseCase.execute(exId);
    return response.status(200).json(result);
  }

  async getAnalyticsFromBranch(request: Request, response: Response) {
    const exId = request.query.branch_id as string;
    const result = await this.findAnalyticsByBranchUseCase.execute(exId);
    return response.status(200).json(result);
  }
}
