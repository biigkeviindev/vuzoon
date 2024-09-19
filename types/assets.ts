export type RealStateAsset = {
  _id: string;
  idAsset: string;
  name: string;
  salePrice: number;
  tokenCode: string;
  status: string;
  financed: number;
  tokenPrice: number;
  rentability: {
    totalInversion: number;
    yearRent: number;
  };
  gallery: string[];
  description: string;
  location: string;
  smartContractAddress: string;
  creationDate: string;
  initRentDate: string;
  period: {
    start: string;
    ends: string;
  };
  legal: {
    subscribtion: string;
    whitepaper: string;
  };
};
