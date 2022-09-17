import { IUser } from "src/application/dtos/IUser";
import { IUserRepository } from "src/application/repositories/IUserRepository";
import { prisma } from "./prismaClient";

export class UserRespository implements IUserRepository {
    async create(data: IUser): Promise<IUser> {
        const userCreated = await prisma.user.create({ data });
        return userCreated;
    }

    async update(id: string, data: IUser): Promise<IUser> {
        const userUpdated = await prisma.user.update({
            where: {
                id,
            },
            data,
        });

        return userUpdated;
    }

    async findAll(): Promise<IUser[]> {
        const users = await prisma.user.findMany({});

        return users;
    }

    async findById(id: string): Promise<IUser | null> {
        const userFound = await prisma.user.findUnique({
            where: { id },
        });

        return userFound;
    }

    async delete(id: string): Promise<IUser> {
        const userDeleted = await prisma.user.delete({
            where: { id },
        });

        return userDeleted;
    }

    async findByEmail(email: string): Promise<IUser | null> {
        const userFound = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        return userFound;
    }
}