import { ICompany } from '../../../application/dtos/ICompany';
import { ICompanyRepository } from '../../../application/repositories/ICompanyRepository';
import { prisma } from './prismaClient';

export default class CompanyRepository implements ICompanyRepository {
  async create(company: ICompany): Promise<ICompany> {
    const newCompany = await prisma.company.create({
      data: company,
    });
    return newCompany;
  }

  async update(id: string, data: ICompany): Promise<ICompany> {
    const companyUpdated = await prisma.company.update({
        where: {
          id
        },
        data,
    });

    return companyUpdated;
  }

  async findAll(): Promise<ICompany[]> {
    return prisma.company.findMany({});
  }

  async findById(id: string): Promise<ICompany | null> {
    const companyFound = await prisma.company.findUnique({
      where: {
        id,
      }
    });

    return companyFound;
  }

  async delete(id: string): Promise<ICompany> {
    const deletedCompany = await prisma.company.delete({ where: { id } });
    return deletedCompany;
  }

  async findByCPNJ(cnpj: string): Promise<ICompany | null> {
    const companyFound = await prisma.company.findUnique({
      where: {
        cnpj
      }
    });

    return companyFound;
  }
}
