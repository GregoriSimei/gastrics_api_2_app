import { Request, Response } from 'express';
import { ICreateBranch } from 'src/application/use-cases/branches/ICreateBranch';
import { IUpdateBranch } from 'src/application/use-cases/branches/IUpdateBranch';
import { inject, injectable } from 'tsyringe';

@injectable()
export class BranchController {
  constructor(
        @inject('ICreateBranchUseCase')
        private createBranchUseCase: ICreateBranch,
        @inject('IUpdateBranchUseCase')
        private updateBranchUseCase: IUpdateBranch,
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
}
