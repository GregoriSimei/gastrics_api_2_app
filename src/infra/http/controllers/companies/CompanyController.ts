import { Request, Response } from 'express';
import { ICreateCompany } from 'src/application/use-cases/companies/ICreateCompany';
import { IDeleteCompany } from 'src/application/use-cases/companies/IDeleteCompany';
import { IFindCompany } from 'src/application/use-cases/companies/IFindCompany';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class CompanyController {
  constructor(
    @inject('ICreateCompanyUseCase')
    private createCompanyUseCase: ICreateCompany,
    @inject('IFindCompanyUseCase')
    private findCompanyUseCase: IFindCompany,
    @inject('IDeleteCompanyUseCase')
    private deleteCompanyUseCase: IDeleteCompany,
  ) { }

  async create(request: Request, response: Response) {
    const payload = request.body;
    const result = await this.createCompanyUseCase.execute(payload);
    return response.status(200).json(result);
  }

  async get(request: Request, response: Response) {
    const id = request.query.id as string;
    const cnpj = request.query.cnpj as string;
    const result = await this.findCompanyUseCase.execute(id, cnpj);
    return response.status(200).json(result);
  }

  async delete(request: Request, response: Response) {
    const id = request.query.id as string;
    const cnpj = request.query.cnpj as string;
    const result = await this.deleteCompanyUseCase.execute(id, cnpj);
    return response.status(200).json(result);
  }
}
