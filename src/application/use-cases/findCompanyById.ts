import { inject, injectable } from 'tsyringe';
import { ICompanyRepository } from '../repositories/ICompanyRepository';
import { IFindCompanyById } from './companies/IFindCompany';

@injectable()
export class FindCompanyById implements IFindCompanyById {
  constructor(
    @inject('ICreateCompanyRepository')
    private companyRepository: ICompanyRepository,
  ) { }

  async execute(id: string): Promise<any> {
    const res = this.companyRepository.findById(id);
    return res;
  }
}
