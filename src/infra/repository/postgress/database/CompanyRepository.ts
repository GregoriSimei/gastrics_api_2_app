import { Repository } from 'typeorm';
import { ICompany } from '../../../../application/dtos/ICompany';
import { ICompanyRepository } from '../../../../application/repositories/ICompanyRepository';
import { Company } from '../models/Company';
import datasource from './typeORMClient';

export default class CompanyRepository implements ICompanyRepository {
  constructor(
    private companyRepository: Repository<Company> = datasource.getRepository(Company),
  ) {}

  async create(company: ICompany): Promise<ICompany> {
    const newCompany = await this.companyRepository.save(company);
    return newCompany;
  }

  async update(id: string, data: ICompany): Promise<ICompany | null> {
    await this.companyRepository.update(
      id,
      data,
    );

    const companyFound = await this.findById(id);

    return companyFound;
  }

  async findAll(): Promise<ICompany[]> {
    return this.companyRepository.find({ relations: ['branches', 'employees', 'alerts', 'branches.cylinders'] });
  }

  async findById(id: string): Promise<ICompany | null> {
    const companyFound = await this.companyRepository.findOne({
      where: {
        id,
      },
      relations: ['branches', 'employees', 'alerts', 'branches.cylinders'],
    });

    return companyFound;
  }

  async delete(id: string): Promise<void> {
    await this.companyRepository.delete(id);
  }

  async findByCPNJ(cnpj: string): Promise<ICompany | null> {
    const companyFound = await this.companyRepository.findOne({
      where: {
        cnpj,
      },
      relations: ['branches', 'employees', 'alerts', 'branches.cylinders'],
    });

    return companyFound;
  }

  async deleteByCNPJ(cnpj: string): Promise<void> {
    await this.companyRepository.delete({ cnpj });
  }
}
