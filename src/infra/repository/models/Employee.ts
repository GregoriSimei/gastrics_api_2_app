import { ICompany } from 'src/application/dtos/ICompany';
import { IEmployee } from 'src/application/dtos/IEmployee';
import {
  Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import { Company } from './Company';

@Entity('employees')
export class Employee implements IEmployee {
    @PrimaryGeneratedColumn('uuid')
      id?: string | undefined;

    @Column()
      name!: string;

    @Column()
      last_name!: string;

    @Column()
      type!: string;

    @Column()
      birth!: Date;

    @Column()
      cpf!: string;

    @ManyToOne(() => Company, (company) => company.employees)
      company!: ICompany;

    @Column()
      email!: string;

    @Column()
      pass!: string;

    @Column()
      active!: boolean;

    @Column()
      key!: string;

    @UpdateDateColumn()
      updated_at?: Date | undefined;

    @CreateDateColumn()
      created_at?: Date | undefined;
}
