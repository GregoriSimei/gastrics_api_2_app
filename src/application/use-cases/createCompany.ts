import { inject, injectable } from 'tsyringe';
import { ICompanyRepository } from '../repositories/ICompanyRepository';
import { ICreateCompany } from './ICreateCompany';

@injectable()
export class CreateCompany implements ICreateCompany {
  constructor(
    @inject('ICreateCompanyRepository')
    private companyRepository: ICompanyRepository,
  ) { }

  async execute(company: any): Promise<any> {
    const res = this.companyRepository.create(company);
    return res;
  }
}
