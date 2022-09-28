import { User, ROLES } from "./01-enum"

const currentuser:User = {
  username: 'diego',
  role: ROLES.ADMIN
}

export const checkAdminRole = () => {
  if (currentuser.role === ROLES.ADMIN) {
    return true;
  }else {
    return false;
  }
}

export const checkRole = (role1: string, role2: string) => {
  if (currentuser.role === role1) {
    return true
  }else if (currentuser.role === role2) {
    return true
  }else {
    return false
  }
}

const rta = checkAdminRole();
console.log(rta)

const rta2 = checkRole(ROLES.SELLER, ROLES.CUSTOMER);
console.log(rta2)

export const checkRoleV2 = (roles: string[]) => {
  if (roles.includes(currentuser.role)) {
    return true
  }else {
    return false
  }
}

const rta3 = checkRoleV2([ROLES.SELLER, ROLES.CUSTOMER]);
console.log(rta3)


export const checkRoleV3 = (...roles: string[]) => {
  if (roles.includes(currentuser.role)) {
    return true
  }else {
    return false
  }
}


const rta4 = checkRoleV3(ROLES.SELLER, ROLES.CUSTOMER, ROLES.ADMIN);
console.log(rta4)


