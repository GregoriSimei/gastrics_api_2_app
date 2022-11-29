import { Request, Response } from 'express';
import { ICreateAlert } from 'src/application/use-cases/alerts/ICreateAlert';
import { IFindAlertByCompany } from 'src/application/use-cases/alerts/IFindAlertByCompany';
import { inject, injectable } from 'tsyringe';

@injectable()
export class AlertController {
  constructor(
        @inject('ICreateAlertUseCase')
        private createAlertUseCase: ICreateAlert,
        @inject('IFindAlertByCompanyUseCase')
        private findAlertByCompanyUseCase: IFindAlertByCompany,
  ) {}

  async create(request: Request, response: Response) {
    const id = request.params.companyId as string;
    const payload = request.body;
    const result = await this.createAlertUseCase.execute(id, payload);
    return response.status(201).json(result);
  }

  async findByCompany(request: Request, response: Response) {
    const companyId = request.params.companyId as string;
    const result = await this.findAlertByCompanyUseCase.execute(companyId);
    return response.status(200).json(result);
  }
}
