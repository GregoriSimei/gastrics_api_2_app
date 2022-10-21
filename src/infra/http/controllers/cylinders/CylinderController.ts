import { Request, Response } from 'express';
import { ICreateCylinder } from 'src/application/use-cases/cyliders/ICreateCylinder';
import { IDeleteCylinder } from 'src/application/use-cases/cyliders/IDeleteCylinder';
import { IFindCylinder } from 'src/application/use-cases/cyliders/IFindCylinder';
import { IUpdateCylinder } from 'src/application/use-cases/cyliders/IUpdateCylinder';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CylinderController {
  constructor(
    @inject('ICreateCylinderUseCase')
    private createCylinderUseCase: ICreateCylinder,
    @inject('IUpdateCylinderUseCase')
    private updateCylinderUseCase: IUpdateCylinder,
    @inject('IFindCylinderUseCase')
    private findCylinderUseCase: IFindCylinder,
    @inject('IDeleteCylinderUseCase')
    private deleteCylinderUseCase: IDeleteCylinder,
  ) {}

  async create(request: Request, response: Response) {
    const companyId = request.params.companyId as string;
    const branchId = request.params.branchId as string;
    const payload = request.body;
    const result = await this.createCylinderUseCase.execute(companyId, branchId, payload);
    return response.status(201).json(result);
  }

  async get(request: Request, response: Response) {
    const companyId = request.params.companyId as string;
    const branchId = request.params.branchId as string;
    const cylinderId = request.query.id as string;
    const result = await this.findCylinderUseCase.execute(companyId, branchId, cylinderId);
    return response.status(200).json(result);
  }

  async delete(request: Request, response: Response) {
    const companyId = request.params.companyId as string;
    const branchId = request.params.branchId as string;
    const cylinderId = request.query.id as string;
    const result = await this.deleteCylinderUseCase.execute(companyId, branchId, cylinderId);
    return response.status(200).json(result);
  }

  async update(request: Request, response: Response) {
    const companyId = request.params.companyId as string;
    const branchId = request.params.branchId as string;
    const payload = request.body;
    const result = await this.updateCylinderUseCase.execute(companyId, branchId, payload);
    return response.status(200).json(result);
  }
}
