import { ICompany } from 'src/application/dtos/ICompany';
import { ICylinderRepository } from 'src/application/repositories/ICylinderRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { IFindCompanyByExId } from './IFindCompanyByExId';

@injectable()
export class FindCompanyByExId implements IFindCompanyByExId {
  constructor(
    @inject('ICylinderRepository')
    private cylinderRepository: ICylinderRepository,
  ) {}

  async execute(exId: string): Promise<ICompany | null> {
    if (!exId) {
      throw new ValidationError('Invalid Request');
    }

    const cylinderFound = await this.cylinderRepository.findByExId(exId);

    return cylinderFound?.branch?.company || null;
  }
}
