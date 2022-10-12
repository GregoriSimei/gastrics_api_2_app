import { ICompany } from 'src/application/dtos/ICompany';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { ICompanyRepository } from '../../repositories/ICompanyRepository';
import { IUpdateCompany } from './IUpdateCompany';

@injectable()
export class UpdateCompanyUseCase implements IUpdateCompany {
  constructor(
    @inject('ICompanyRepository')
    private companyRepository: ICompanyRepository,
  ) { }

  async execute(company: ICompany): Promise<any> {
    const { id, cnpj } = company;

    if (!id) {
      throw new ValidationError('Without id or cnpj');
    }

    if (!cnpj) {
      throw new ValidationError('Without id or cnpj');
    }

    const companyFound = await this.companyRepository.findByCPNJ(cnpj);

    if (!companyFound) {
      throw new ValidationError('Company not exist');
    }

    if (id !== companyFound.id) {
      throw new ValidationError('Invalid parameters');
    }

    const res = await this.companyRepository.update(id, company);

    return res;
  }
}
