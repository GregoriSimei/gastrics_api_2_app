import { Request, Response } from 'express';
import { ICreateCompany } from 'src/application/use-cases/companies/ICreateCompany';
import { IFindCompany } from 'src/application/use-cases/companies/IFindCompany';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class CompanyController {
  constructor(
    @inject('ICreateCompanyUseCase')
    private createCompanyUseCase: ICreateCompany,
    @inject('IFindCompanyUseCase')
    private findCompanyUseCase: IFindCompany,
  ) { }

  async create(request: Request, response: Response) {
    const payload = request.body;
    const result = await this.createCompanyUseCase.execute(payload);
    return response.status(200).json(result);
  }

  async getById(request: Request, response: Response) {
    const id = request.query as unknown as string;
    const result = await this.findCompanyUseCase.execute(id);
    return response.status(200).json(result);
  }
}
