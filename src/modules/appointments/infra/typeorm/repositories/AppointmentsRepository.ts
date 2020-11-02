import { EntityRepository, Repository } from 'typeorm';

import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentRepository';

import Appointment from '@modules/appointments/infra/typeorm/entities/Appointment';

@EntityRepository(Appointment) // definindo como repositorio da entidade Appointment
class AppointmentsRepository
  extends Repository<Appointment>
  implements IAppointmentRepository {
  public async findByDate(date: Date): Promise<Appointment | undefined> {
    const findAppointment = await this.findOne({
      where: {
        date,
      },
    });

    return findAppointment;
  }
}

export default AppointmentsRepository;
