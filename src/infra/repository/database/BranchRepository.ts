import { IBranch } from "src/application/dtos/IBranch";
import { IBranchRepository } from "src/application/repositories/IBranchRepository";
import { prisma } from "./prismaClient";

export class BranchRepository implements IBranchRepository {
    async create(data: IBranch): Promise<IBranch> {
        const createdBranch = await prisma.branch.create({
            data,
        });
        
        return createdBranch;
    }

    async update(id: string, data: IBranch): Promise<IBranch> {
        const updatedBranch = await prisma.branch.update({
            where: {
                id,
            },
            data,
        });

        return updatedBranch;
    }

    async findAll(): Promise<IBranch[]> {
        const branches = await prisma.branch.findMany({});
        return branches;
    }

    async findById(id: string): Promise<IBranch | null> {
        const branchFound = await prisma.branch.findUnique({
            where: {
                id,
            },
        });

        return branchFound;
    }

    async delete(id: string): Promise<IBranch> {
        const deleted = await prisma.branch.delete({
            where: {
                id,
            },
        });


        return deleted;
    }
}