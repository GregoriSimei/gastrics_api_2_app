import { IBranch } from 'src/application/dtos/IBranch';
import { ICompany } from 'src/application/dtos/ICompany';
import { ICylinder } from 'src/application/dtos/ICylinder';
import {
  Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import { Company } from './Company';
import { Cylinder } from './Cylinder';

@Entity('branches')
export class Branch implements IBranch {
    @PrimaryGeneratedColumn('uuid')
      id?: string | undefined;

    @Column()
      name!: string;

    @Column()
      address!: string;

    @OneToMany(() => Cylinder, (cylinder) => cylinder.branch)
      cylinders?: ICylinder[] | undefined;

    @ManyToOne(() => Company, (company) => company.branches)
      company!: ICompany;

    @UpdateDateColumn()
      updated_at?: Date | undefined;

    @CreateDateColumn()
      created_at?: Date | undefined;
}
