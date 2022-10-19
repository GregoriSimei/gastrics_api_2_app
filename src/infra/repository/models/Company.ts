import { IBranch } from 'src/application/dtos/IBranch';
import { ICompany } from 'src/application/dtos/ICompany';
import { IEmployee } from 'src/application/dtos/IEmployee';
import {
  Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import { Branch } from './Branch';
import { Employee } from './Employee';

@Entity('companies')
export class Company implements ICompany {
    @PrimaryGeneratedColumn('uuid')
      id?: string | undefined;

    @Column()
      name!: string;

    @Column()
      cnpj!: string;

    @OneToMany(() => Employee, (employee) => employee.company)
      employees?: IEmployee[];

    @OneToMany(() => Branch, (branch) => branch.company)
      branches?: IBranch[];

    @UpdateDateColumn()
      updated_at?: Date;

    @CreateDateColumn()
      created_at?: Date | undefined;
}
