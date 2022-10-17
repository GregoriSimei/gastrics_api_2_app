import { IBranch } from 'src/application/dtos/IBranch';
import { ICylinder } from 'src/application/dtos/ICylinder';
import {
    Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn
} from 'typeorm';
import { Branch } from './Branch';

@Entity('cylinders')
export class Cylinder implements ICylinder {
    @PrimaryGeneratedColumn()
      id?: string | undefined;

    @Column()
      ex_id!: string;

    @Column()
      type!: string;

    @Column()
      weight_actual!: number;

    @Column()
      weight_full!: number;

    @Column()
      weight_shell!: number;

    @ManyToOne(() => Branch, (branch) => branch.cylinders)
      branch!: IBranch;

    @UpdateDateColumn()
      updated_at?: Date | undefined;

    @CreateDateColumn()
      created_at?: Date | undefined;
}
