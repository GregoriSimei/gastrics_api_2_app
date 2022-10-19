import { IBranch } from '../dtos/IBranch';
import { IGenericRepository } from './IGenericRepository';

export interface IBranchRepository extends IGenericRepository<IBranch> {
    findByAddress(address: string): Promise<IBranch | null>;
}
