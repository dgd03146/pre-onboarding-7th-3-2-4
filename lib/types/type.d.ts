export type AccountType = {
  id?: string;
  user_id: string;
  uuid: string;
  broker_id: TBrokersKey;
  status: TAccountStatusValue;
  number: string;
  name: string;
  assets: string;
  payments: string;
  is_active: string;
  created_at: Date;
  updated_at: Date;
};

export type UserType = {
  id: number;
  uuid: string;
  photo: string;
  name: string;
  email: string;
  age: number;
  gender_origin: number;
  birth_date: string;
  phone_number: string;
  address: string;
  detail_address: string;
  last_login: string;
  created_at: Date;
  updated_at: Date;
};
