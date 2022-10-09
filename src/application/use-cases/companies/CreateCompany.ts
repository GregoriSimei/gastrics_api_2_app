import { ICompany } from 'src/application/dtos/ICompany';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { ICompanyRepository } from '../../repositories/ICompanyRepository';
import { ICreateCompany } from './ICreateCompany';

@injectable()
export class CreateCompanyUseCase implements ICreateCompany {
  constructor(
    @inject('ICompanyRepository')
    private companyRepository: ICompanyRepository,
  ) { }

  async execute(company: ICompany): Promise<ICompany> {
    const { cnpj } = company;

    const companyExist = await this.companyRepository.findByCPNJ(cnpj);

    if (companyExist) {
      throw new ValidationError('Company already exist');
    }

    const res = await this.companyRepository.create(company);

    return res;
  }
}
