import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { ICreateCompany } from '../../../../application/use-cases/ICreateCompany';

@injectable()
export default class CompanyController {
  constructor(
    @inject('ICreateCompany')
    private createCompanyUseCase: ICreateCompany,
  ) { }

  async create(request: Request, response: Response) {
    const payload = request.body;
    const result = await this.createCompanyUseCase.execute(payload);
    return response.status(200).json({ messageId: result });
  }
}
