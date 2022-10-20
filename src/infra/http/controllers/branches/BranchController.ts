import { Request, Response } from 'express';
import { ICreateBranch } from 'src/application/use-cases/branches/ICreateBranch';
import { IDeleteBranch } from 'src/application/use-cases/branches/IDeleteBranch';
import { IFindBranch } from 'src/application/use-cases/branches/IFindBranch';
import { IUpdateBranch } from 'src/application/use-cases/branches/IUpdateBranch';
import { inject, injectable } from 'tsyringe';

@injectable()
export class BranchController {
  constructor(
        @inject('ICreateBranchUseCase')
        private createBranchUseCase: ICreateBranch,
        @inject('IUpdateBranchUseCase')
        private updateBranchUseCase: IUpdateBranch,
        @inject('IFindBranchUseCase')
        private findBranchUseCase: IFindBranch,
        @inject('IDeleteBranchUseCase')
        private deleteBranchUseCase: IDeleteBranch,
  ) {}

  async create(request: Request, response: Response) {
    const id = request.params.companyId as string;
    const payload = request.body;
    const result = await this.createBranchUseCase.execute(id, payload);
    return response.status(200).json(result);
  }
  
  async update(request: Request, response: Response) {
    const id = request.params.companyId as string;
    const payload = request.body;
    const result = await this.updateBranchUseCase.execute(id, payload);
    return response.status(200).json(result);
  }

  async find(request: Request, response: Response) {
    const companyId = request.params.companyId as string;
    const branchId = request.query.id as string;
    const result = await this.findBranchUseCase.execute(companyId, branchId);
    return response.status(200).json(result);
  }

  async delete(request: Request, response: Response) {
    const companyId = request.params.companyId as string;
    const branchId = request.query.id as string;
    const result = await this.deleteBranchUseCase.execute(companyId, branchId);
    return response.status(200).json(result);
  }
}
