export enum UserRole {
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: UserRole;
}
