import { IUser } from "../dtos/IUser";
import { IGenericRepository } from "./IGenericRepository";

export interface IUserRepository extends IGenericRepository<IUser> {
    findByEmail(email: string): Promise<IUser | null>;
}