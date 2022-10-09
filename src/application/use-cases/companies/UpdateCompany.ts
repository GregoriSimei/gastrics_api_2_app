import { inject, injectable } from 'tsyringe';
import { ICompanyRepository } from '../../repositories/ICompanyRepository';

@injectable()
export class UpdateCompanyUseCase {
  constructor(
    @inject('ICompanyRepository')
    private companyRepository: ICompanyRepository,
  ) { }

  async execute(id: string): Promise<any> {
    const res = this.companyRepository.findById(id);
    return res;
  }
}
