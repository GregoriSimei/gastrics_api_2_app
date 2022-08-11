import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { IFindCompanyById } from '../../../../application/use-cases/companies/IFindCompany';
import { ICreateCompany } from '../../../../application/use-cases/ICreateCompany';

@injectable()
export default class CompanyController {
  constructor(
    @inject('ICreateCompany')
    private createCompanyUseCase: ICreateCompany,
    @inject('IFindCompanyById')
    private IFindCompanyByIdUseCase: IFindCompanyById,
  ) { }

  async create(request: Request, response: Response) {
    const payload = request.body;
    const result = await this.createCompanyUseCase.execute(payload);
    return response.status(200).json(result);
  }

  async getById(request: Request, response: Response) {
    const { id } = request.params;
    const result = await this.IFindCompanyByIdUseCase.execute(id);
    return response.status(200).json(result);
  }
}
