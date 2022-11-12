import { Request, Response } from 'express';
import { IFindCylinderIOT } from 'src/application/use-cases/iot/cylinder/IFindCylinderIOT';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CylinderIOTController {
  constructor(
        @inject('IFindCylinderIOTUseCase')
        private findCylinderIOTUseCase: IFindCylinderIOT,
  ) {}

  async findByExId(request: Request, response: Response) {
    const exId = request.query.exId as string;
    const result = await this.findCylinderIOTUseCase.execute(exId);
    response.status(200).json(result);
  }
}
