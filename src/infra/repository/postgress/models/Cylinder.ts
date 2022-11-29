import { IBranch } from 'src/application/dtos/IBranch';
import { ICylinder } from 'src/application/dtos/ICylinder';
import {
  Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import { Branch } from './Branch';

@Entity('cylinders')
export class Cylinder implements ICylinder {
    @PrimaryGeneratedColumn('uuid')
      id?: string | undefined;

    @Column()
      name!: string;

    @Column({ name: 'ex_id' })
      exId!: string;

    @Column({ name: 'gas_type' })
      gasType!: string;

    @Column()
      type!: string;

    @Column({ name: 'weight_shell', nullable: true, type: 'float' })
      weightShell!: number;

    @Column({ name: 'max_weight', type: 'float' })
      maxWeight!: number;

    @Column({ name: 'alert_when', nullable: true })
      alertWhen!: number;

    @ManyToOne(() => Branch, (branch) => branch.cylinders)
      branch!: IBranch;

    @UpdateDateColumn()
      updated_at?: Date | undefined;

    @CreateDateColumn()
      created_at?: Date | undefined;
}
