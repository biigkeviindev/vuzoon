export type Customer = {
  email: string;
  id: string | null;
  kyc: {
    personal: {
      name: string;
      lastname: string;
      bornDate: string;
      city: string;
      country: string;
      phone: string;
      identity: string;
    };
  };
  lastname: string;
  name: string;
  password: string;
  reffer: string;
  wallet: string;
  _id: string;
};
