/* eslint-disable no-console */
import nodemailer, { Transporter } from 'nodemailer';
import IMailProvider from '../models/IMailProvider';

class EtherealMailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const transporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transporter;
    });
  }

  public async sendMail(to: string, body: string): Promise<void> {
    const message = await this.client.sendMail({
      from: 'equipe papada <ridineu@hotmail.com>',
      to,
      subject: 'reset senha',
      text: body,
    });

    console.log('Mesasge sent: %s', message.messageId);
    console.log('Pewview URL: %s', nodemailer.getTestMessageUrl(message));
  }
}

export default EtherealMailProvider;
