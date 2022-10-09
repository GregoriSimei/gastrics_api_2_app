import { ICompany } from 'src/application/dtos/ICompany';
import { inject, injectable } from 'tsyringe';
import { ICompanyRepository } from '../../repositories/ICompanyRepository';
import { IFindCompany } from './IFindCompany';

@injectable()
export class FindCompanyUseCase implements IFindCompany {
  constructor(
    @inject('ICompanyRepository')
    private companyRepository: ICompanyRepository,
  ) { }

  async execute(id?: string): Promise<ICompany | ICompany[] | null> {
    const response = id
      ? await this.companyRepository.findById(id)
      : await this.companyRepository.findAll();

    return response;
  }
}
