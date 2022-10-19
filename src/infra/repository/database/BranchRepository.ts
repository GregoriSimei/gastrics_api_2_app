import { IBranch } from 'src/application/dtos/IBranch';
import { IBranchRepository } from 'src/application/repositories/IBranchRepository';
import { Repository } from 'typeorm';
import { Branch } from '../models/Branch';
import datasource from './typeORMClient';

export class BranchRepository implements IBranchRepository {
  constructor(
    private branchRepository: Repository<Branch> = datasource.getRepository(Branch),
  ) {}

  async create(data: IBranch): Promise<IBranch> {
    const createdBranch = await this.branchRepository.save(data);

    return createdBranch;
  }

  async update(id: string, data: IBranch): Promise<IBranch | null> {
    await this.branchRepository.update(id, data);

    return this.findById(id);
  }

  async findAll(): Promise<IBranch[]> {
    const branches = await this.branchRepository.find({});
    return branches;
  }

  async findById(id: string): Promise<IBranch | null> {
    const branchFound = await this.branchRepository.findOne({
      where: {
        id,
      },
    });

    return branchFound;
  }

  async findByAddress(companyId: string, address: string): Promise<IBranch | null> {
    return this.branchRepository.findOne({ where: { address, company: { id: companyId } }, relations: ['company'], loadRelationIds: true });
  }

  async delete(id: string): Promise<void> {
    await this.branchRepository.delete(id);
  }
}
