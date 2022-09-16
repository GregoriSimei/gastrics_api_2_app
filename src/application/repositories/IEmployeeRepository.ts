import { IEmployee } from "../dtos/IEmployee";
import { IGenericRepository } from "./IGenericRepository";

export interface IEmployeeRepository extends IGenericRepository<IEmployee> {
    findByCPF(cpf: string): Promise<IEmployee | null>;
}