export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
}

export type User = {
  username: string,
  role: ROLES,
}

const diegoUser: User = {
  username: "Diego",
  role: ROLES.ADMIN,
}
