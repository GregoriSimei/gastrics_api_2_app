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

    @Column({ name: 'last_name' })
      lastName!: string;

    @Column()
      type!: string;

    @Column({ type: Date })
      birth!: Date;

    @Column()
      cpf!: string;

    @ManyToOne(() => Company, (company) => company.employees)
      company!: ICompany;

    @Column()
      email!: string;

    @Column()
      pass!: string;

    @Column('boolean', { default: true })
      active!: boolean;

    @Column({ default: null })
      key!: string;

    @UpdateDateColumn()
      updated_at?: Date | undefined;

    @CreateDateColumn()
      created_at?: Date | undefined;
}
