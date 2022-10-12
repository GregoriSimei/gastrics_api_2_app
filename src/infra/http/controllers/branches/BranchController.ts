import { Request, Response } from 'express';
import { ICreateBranch } from 'src/application/use-cases/branches/ICreateBranch';
import { inject, injectable } from 'tsyringe';

@injectable()
export class BranchController {
  constructor(
        @inject('ICreateBranchUseCase')
        private createBranchUseCase: ICreateBranch,
  ) {}

  async create(request: Request, response: Response) {
    const payload = request.body;
    const result = await this.createBranchUseCase.execute(payload);
    return response.status(200).json(result);
  }
}
