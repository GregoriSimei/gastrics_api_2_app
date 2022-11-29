import { IAlert } from 'src/application/dtos/IAlert';
import { IAlertRepository } from 'src/application/repositories/IAlertRepository';
import { Repository } from 'typeorm';
import { Alert } from '../models/Alert';
import datasource from './typeORMClient';

export class AlertRepository implements IAlertRepository {
  constructor(
    private alertRepository: Repository<Alert> = datasource.getRepository(Alert),
  ) {}

  async findAllByCompanyId(companyId: string): Promise<IAlert[]> {
    const alertsFound = await this.alertRepository.find({
      where: {
        company: {
          id: companyId,
        },
      },
      relations: ['company'],
      loadRelationIds: true,
    });

    return alertsFound;
  }

  async create(data: IAlert): Promise<IAlert> {
    return this.alertRepository.save(data);
  }

  update(id: string, data: IAlert): Promise<IAlert | null> {
    throw new Error('Method not implemented.');
  }

  findAll(): Promise<IAlert[]> {
    throw new Error('Method not implemented.');
  }

  findById(id: string): Promise<IAlert | null> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
