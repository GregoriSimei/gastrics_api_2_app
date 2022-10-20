import { IEmployee } from 'src/application/dtos/IEmployee';
import { IEmployeeRepository } from 'src/application/repositories/IEmployeeRepository';
import { Repository } from 'typeorm';
import { Employee } from '../models/Employee';
import datasource from './typeORMClient';

export class EmployeeRepository implements IEmployeeRepository {
  constructor(
    private employeeRepository: Repository<Employee> = datasource.getRepository(Employee),
  ) {}

  async create(data: IEmployee): Promise<IEmployee> {
    const employeeCreated = await this.employeeRepository.save(data);
    return employeeCreated;
  }

  async update(id: string, data: IEmployee): Promise<IEmployee| null> {
    await this.employeeRepository.update(
      id,
      data,
    );

    const employeeUpdated = await this.findById(id);

    return employeeUpdated;
  }

  async findAll(): Promise<IEmployee[]> {
    const employees = await this.employeeRepository.find({ relations: ['company'] });

    return employees;
  }

  async findById(id: string): Promise<IEmployee | null> {
    const employeeFound = await this.employeeRepository.findOne({
      where: {
        id,
      },
      relations: ['company'],
    });

    return employeeFound;
  }

  async delete(id: string): Promise<void> {
    await this.employeeRepository.delete(
      id,
    );
  }

  async findByCPF(companyId: string, cpf: string): Promise<IEmployee | null> {
    const employeeFound = await this.employeeRepository.findOne({
      where: {
        cpf,
        company: {
          id: companyId,
        },
      },
      relations: ['company'],
      loadRelationIds: true,
    });

    return employeeFound;
  }

  async findByEmail(companyId: string, email: string): Promise<IEmployee | null> {
    const employeeFound = await this.employeeRepository.findOne({
      where: {
        email,
        company: {
          id: companyId,
        },
      },
      relations: ['company'],
      loadRelationIds: true,
    });

    return employeeFound;
  }
}
