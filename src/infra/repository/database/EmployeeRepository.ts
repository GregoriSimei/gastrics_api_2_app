import { IEmployee } from "src/application/dtos/IEmployee";
import { IEmployeeRepository } from "src/application/repositories/IEmployeeRepository";
import { prisma } from "./prismaClient";

export class EmployeeRepository implements IEmployeeRepository {
    async create(data: IEmployee): Promise<IEmployee> {
        const employeeCreated = await prisma.employee.create({ data });
        return employeeCreated;
    }

    async update(id: string, data: IEmployee): Promise<IEmployee> {
        const employeeUpdated = await prisma.employee.update({
            where: {
                id,
            },
            data,
        });

        return employeeUpdated;
    }

    async findAll(): Promise<IEmployee[]> {
        const employees = await prisma.employee.findMany({});
        
        return employees;
    }

    async findById(id: string): Promise<IEmployee | null> {
        const employeeFound = await prisma.employee.findUnique({
            where: {
                id,
            },
        });

        return employeeFound;
    }

    async delete(id: string): Promise<IEmployee> {
        const employeeDeleted = await prisma.employee.delete({
            where: {
                id,
            },
        });

        return employeeDeleted;
    }

    async findByCPF(cpf: string): Promise<IEmployee | null> {
        const employeeFound = await prisma.employee.findUnique({
            where: {
                cpf,
            },
        });

        return employeeFound;
    }
}