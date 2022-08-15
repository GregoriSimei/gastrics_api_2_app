import { ICompany } from '../../../application/dtos/ICompany';
import { ICompanyRepository } from '../../../application/repositories/ICompanyRepository';
import { prisma } from './prismaClient';

export default class CompanyRepository implements ICompanyRepository {
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  update(id: string, data: object): Promise<ICompany> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<any> {
    throw new Error('Method not implemented.');
  }

  async create(company: ICompany): Promise<any> {
    const newCompany = await prisma.company.create({
      data: company,
    });
    return newCompany;
  }
}
