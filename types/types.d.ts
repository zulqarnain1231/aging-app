export interface IReportFilters {
  oldestOrderDate:string;
  filter:string;
}

export interface IAddUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string | undefined;
  password: string;
  search: string;
}

export interface IUpdateUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string | undefined;
  password: string;
}

export interface IEditPickedTicket {
  laminart: string;
  additionalComment: string;
  cts: string;
  wareHouse: number;
  status: string | undefined;
  Inv: string;
  run: string;
}

export interface IShippingFilters {
  filter: string | undefined;
  from: string;
  to: string;
}
