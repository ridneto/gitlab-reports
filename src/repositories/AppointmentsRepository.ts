import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

@EntityRepository(Appointment) // definindo como repositorio da entidade Appointment
class AppointmentsRepository extends Repository<Appointment> {
  // importante extender o Repository<Appointment>
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: {
        date,
      },
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
