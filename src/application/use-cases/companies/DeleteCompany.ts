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

    const response = id
      ? await this.companyRepository.delete(id)
      : await this.companyRepository.deleteByCNPJ(cnpj);

    return Boolean(response);
  }
}
