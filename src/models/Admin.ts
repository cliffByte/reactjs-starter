import { plainToClass } from "class-transformer";

enum Permissions {
  READ = "read",
  WRITE = "write",
  DELETE = "delete",
  UPDATE = "update",
  ACTION = "action",
  ALL = "all",
}
export enum RoleLevels {
  SUPER_ADMIN = -1,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
}

type Permission = {
  project: string;
  permissions: Permissions[];
};

class Admin {
  id: string;
  name: string;
  email: string;
  password: string;
  roleLevel: RoleLevels;
  permissions: Permission[];

  constructor(
    $id: string,
    $name: string,
    $email: string,
    $password: string,
    $roleLevel: RoleLevels,
    $permissions: Permission[]
  ) {
    this.id = $id;
    this.name = $name;
    this.email = $email;
    this.password = $password;
    this.roleLevel = $roleLevel;
    this.permissions = $permissions;
  }
  static plainToInstance(plainData: object): Admin {
    return plainToClass(Admin, plainData);
  }
  static plainToInstances(plainData: object[]): Admin[] {
    return plainToClass(Admin, plainData);
  }
}
export default Admin;
