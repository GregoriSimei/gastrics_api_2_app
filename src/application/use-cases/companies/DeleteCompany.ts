import { ICompanyRepository } from 'src/application/repositories/ICompanyRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IDeleteCompany } from './IDeleteCompany';

@injectable()
export class DeleteCompanyUseCase implements IDeleteCompany {
  constructor(
    @inject('ICompanyRepository')
    private companyRepository: ICompanyRepository,
  ) {}

  async execute(id: string, cnpj: string): Promise<boolean> {
    if (!id && !cnpj) {
      throw new ValidationError('Without id or cnpj');
    }

    if (id) {
      await this.companyRepository.delete(id);
    } else {
      await this.companyRepository.deleteByCNPJ(cnpj);
    }

    return true;
  }
}
