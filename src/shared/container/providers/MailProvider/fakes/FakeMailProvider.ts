import ISendMailDTO from '../dtos/ISendMailDTO';
import IMailProvider from '../models/IMailProvider';

class FakeEmailProvider implements IMailProvider {
  private messages: ISendMailDTO[] = [];

  public async sendMail(messages: ISendMailDTO): Promise<void> {
    this.messages.push(messages);
  }
}

export default FakeEmailProvider;
