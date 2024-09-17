export type Customer = {
  email: string;
  id: string | null;
  personal: {
    name: string;
    lastname: string;
    bornDate: string;
    city: string;
    country: string;
    phone: string;
    identity: string;
  };
  financial: any;
  lastname: string;
  name: string;
  password: string;
  reffer: string;
  wallet: string;
  _id: string;
};
