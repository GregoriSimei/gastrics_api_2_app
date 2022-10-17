import { ICylinder } from 'src/application/dtos/ICylinder';
import { ICylinderToCreate } from 'src/application/dtos/ICylinderToCreate';
import { ICylinderRepository } from 'src/application/repositories/ICylinderRepository';
import { Repository } from 'typeorm';
import { Cylinder } from '../models/Cylinder';
import datasource from './typeORMClient';

export class CylinderRepository implements ICylinderRepository {
  constructor(
    private cylinderRepository: Repository<Cylinder> = datasource.getRepository(Cylinder),
  ) {}

  async create(data: ICylinderToCreate): Promise<ICylinder> {
    const cylinderCreated = await this.cylinderRepository.save(
      data,
    );

    return cylinderCreated;
  }

  async update(id: string, data: ICylinder): Promise<ICylinder | null> {
    await this.cylinderRepository.update(
      id,
      data,
    );

    const cylinderUpdated = this.findById(id);

    return cylinderUpdated;
  }

  async findAll(): Promise<ICylinder[]> {
    const cylinders = await this.cylinderRepository.find({});
    return cylinders;
  }

  async findById(id: string): Promise<ICylinder | null> {
    const cylinderFound = await this.cylinderRepository.findOne({
      where: {
        id,
      },
    });

    return cylinderFound;
  }

  async delete(id: string): Promise<void> {
    await this.cylinderRepository.delete(id);
  }

  async findByExId(exId: string): Promise<ICylinder | null> {
    const cylinderFound = await this.cylinderRepository.findOne({
      where: {
        ex_id: exId,
      },
    });

    return cylinderFound;
  }
}
