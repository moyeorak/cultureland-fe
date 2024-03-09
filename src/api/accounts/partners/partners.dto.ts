export type PartnersSignUpDto = {
  email: string;
  password: string;
  registrationId: string;
  phoneNumber: string;
  name: string;
  ownerName: string;
  address: string;
  bankName: string;
  bankAccount: string;
};

export type PartnersSignInDto = {
  email: string;
  password: string;
};
