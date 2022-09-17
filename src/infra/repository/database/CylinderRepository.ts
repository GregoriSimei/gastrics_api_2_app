import { ICylinder } from "src/application/dtos/ICylinder";
import { ICylinderToCreate } from "src/application/dtos/ICylinderToCreate";
import { ICylinderRepository } from "src/application/repositories/ICylinderRepository";
import { prisma } from "./prismaClient";

export class CylinderRepository implements ICylinderRepository {
    async create(data: ICylinderToCreate): Promise<ICylinder> {
        const cylinderCreated = await prisma.cylinder.create({
            data,
        });

        return cylinderCreated;
    }

    async update(id: string, data: ICylinder): Promise<ICylinder> {
        const cylinderUpdated = await prisma.cylinder.update({
            where: {
                id,
            },
            data,
        });

        return cylinderUpdated;
    }

    async findAll(): Promise<ICylinder[]> {
        const cylinders = await prisma.cylinder.findMany({});
        return cylinders;
    }

    async findById(id: string): Promise<ICylinder | null> {
        const cylinderFound = await prisma.cylinder.findUnique({
            where: {
                id,
            },
        });
        
        return cylinderFound;
    }

    async delete(id: string): Promise<ICylinder> {
        const cylinderDeleted = await prisma.cylinder.delete({
            where: {
                id,
            },
        });

        return cylinderDeleted;
    }

    async findByExId(exId: string): Promise<ICylinder | null> {
        const cylinderFound = await prisma.cylinder.findUnique({
            where: {
                ex_id: exId,
            },
        });

        return cylinderFound;
    }
}