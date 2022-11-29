import { sign } from 'jsonwebtoken';
import { IEmployeeToToken } from 'src/application/dtos/IEmployeeToToken';
import { ILoginRequest } from 'src/application/dtos/ILoginRequest';
import { ILoginResponse } from 'src/application/dtos/ILoginToken';
import { IEmployeeRepository } from 'src/application/repositories/IEmployeeRepository';
import { inject, injectable } from 'tsyringe';
import { ValidationError } from 'yup';
import { authConfig } from '../../../config/authConfig';
import { ILogin } from './ILogin';

@injectable()
export class LoginUseCase implements ILogin {
  constructor(
    @inject('IEmployeeRepository')
    private employeeRepository: IEmployeeRepository,
  ) {}

  async execute(loginRequest: ILoginRequest): Promise<ILoginResponse> {
    const { email, pass } = loginRequest;
    if (!email || !pass) {
      throw new ValidationError('Invalid parameters');
    }

    const employeeFound = await this.employeeRepository.findByEmailAndPassword(email, pass);

    if (!employeeFound) {
      throw new ValidationError('Email or password are wrong');
    }

    const employeeToToken: IEmployeeToToken = {
      id: employeeFound.id,
      name: employeeFound.name,
      lastName: employeeFound.lastName,
      email: employeeFound.email,
      cpf: employeeFound.cpf,
      birth: employeeFound.birth,
      type: employeeFound.type,
      company: employeeFound.company,
      created_at: employeeFound.created_at,
      updated_at: employeeFound.updated_at,
    };

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign(employeeToToken, secret, { expiresIn });

    const response: ILoginResponse = {
      employee: employeeToToken,
      token,
    };

    return response;
  }
}
