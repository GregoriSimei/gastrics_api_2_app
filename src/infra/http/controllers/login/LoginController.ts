import { Request, Response } from 'express';
import { ILogin } from 'src/application/use-cases/login/ILogin';
import { inject, injectable } from 'tsyringe';

@injectable()
export class LoginController {
  constructor(
    @inject('ILoginUseCase')
    private loginUseCase: ILogin,
  ) {}

  async login(request: Request, response: Response) {
    const payload = request.body;
    const result = await this.loginUseCase.execute(payload);
    response.status(200).json(result);
  }
}
