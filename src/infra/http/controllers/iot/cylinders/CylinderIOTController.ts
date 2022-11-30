import { Request, Response } from 'express';
import { IFindCompanyByExId } from 'src/application/use-cases/iot/company/IFindCompanyByExId';
import { IFindCylinderIOT } from 'src/application/use-cases/iot/cylinder/IFindCylinderIOT';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CylinderIOTController {
  constructor(
        @inject('IFindCylinderIOTUseCase')
        private findCylinderIOTUseCase: IFindCylinderIOT,
        @inject('IFindCompanyByExId')
        private findCompanyByExIdUseCase: IFindCompanyByExId,
  ) {}

  async findByExId(request: Request, response: Response) {
    const exId = request.query.exId as string;
    const result = await this.findCylinderIOTUseCase.execute(exId);
    response.status(200).json(result);
  }

  async findCompanyByExId(request: Request, response: Response) {
    const exId = request.query.exId as string;
    const result = await this.findCompanyByExIdUseCase.execute(exId);
    response.status(200).json(result);
  }
}
