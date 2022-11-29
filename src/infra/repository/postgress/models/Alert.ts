import { IAlert } from 'src/application/dtos/IAlert';
import { ICompany } from 'src/application/dtos/ICompany';
import {
  Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import { Company } from './Company';

@Entity('alerts')
export class Alert implements IAlert {
    @PrimaryGeneratedColumn('uuid')
      id?: string | undefined;

    @Column()
      name!: string;

    @Column()
      type!: string;

    @Column()
      status!: string;

    @Column({ name: 'cylinder_ex_id' })
      cylinderExId!: string;

    @Column({ name: 'day_description' })
      dayDescription!: string;

    @ManyToOne(() => Company, (company) => company.employees)
      company!: ICompany;

    @UpdateDateColumn()
      updated_at?: Date | undefined;

    @CreateDateColumn()
      created_at?: Date | undefined;
}
