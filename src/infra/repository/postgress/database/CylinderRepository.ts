import { CylinderInfoTypes } from 'src/application/dtos/CylinderInfoTypes';
import { ICylinder } from 'src/application/dtos/ICylinder';
import { ICylinderInfo } from 'src/application/dtos/ICylinderInfo';
import { ICylinderToCreate } from 'src/application/dtos/ICylinderToCreate';
import { ICylinderRepository } from 'src/application/repositories/ICylinderRepository';
import { Repository } from 'typeorm';
import { cylindersType } from '../../../../application/dtos/CylinderTypes';
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
      { ...data },
    );

    const cylinderUpdated = this.findById(id);

    return cylinderUpdated;
  }

  async findAll(): Promise<ICylinder[]> {
    const cylinders = await this.cylinderRepository.find({ relations: ['branch'] });
    return cylinders;
  }

  async findById(id: string): Promise<ICylinder | null> {
    const cylinderFound = await this.cylinderRepository.findOne({
      where: {
        id,
      },
      relations: ['branch'],
    });

    return cylinderFound;
  }

  async delete(id: string): Promise<void> {
    await this.cylinderRepository.delete(id);
  }

  async findByExId(exId: string): Promise<ICylinder | null> {
    const cylinderFound = await this.cylinderRepository.findOne({
      where: {
        exId,
      },
      relations: ['branch', 'branch.company'],
    });

    return cylinderFound;
  }

  findCylinderInfoByType(type: string): ICylinderInfo | null {
    const infoAccordingTypes: CylinderInfoTypes = {
      p13: {
        type: 'p13',
        weightShell: 15,
        maxWeight: 35,
      },
      p20v3: {
        type: 'p20v3',
        weightShell: 27,
        maxWeight: 47,
      },
      p20v5: {
        type: 'p20v5',
        weightShell: 28,
        maxWeight: 48,
      },
      p45: {
        type: 'p45',
        weightShell: 39,
        maxWeight: 59,
      },
      tcc: {
        type: 'tcc',
        weightShell: 0,
        maxWeight: 10,
      },
    };

    const typeExist = cylindersType.find((cType) => cType === type);
    if (!typeExist) {
      return null;
    }

    return infoAccordingTypes[typeExist];
  }
}
