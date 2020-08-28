import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments') // classe é uma entidade e qual a tabela
class Appointment {
  @PrimaryGeneratedColumn('uuid') // passo qual tipo para coluna
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Appointment;
