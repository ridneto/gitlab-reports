interface IMailConfig {
  drive: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  drive: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'equipe@gobarber.com.br',
      name: 'equipe gobarber',
    },
  },
} as IMailConfig;
