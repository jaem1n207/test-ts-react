import ResponseType from './ResponseType';

export interface UserProfileResponse extends ResponseType {
  // user: Array<UserProfileType>;
  id: string;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
}

export interface UserProfileType {
  id: string;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: CompanyType;
}

export interface AddressType {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: object;
}

export interface CompanyType {
  name: string;
  catchPhrase: string;
  bs: string;
}
