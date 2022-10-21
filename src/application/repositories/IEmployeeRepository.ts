import { IEmployee } from '../dtos/IEmployee';
import { IGenericRepository } from './IGenericRepository';

export interface IEmployeeRepository extends IGenericRepository<IEmployee> {
    findByCPF(companyId: string, cpf: string): Promise<IEmployee | null>;
    findByEmail(companyId: string, email: string): Promise<IEmployee | null>;
}
