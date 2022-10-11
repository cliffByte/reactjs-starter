import { plainToClass } from "class-transformer";

class Ward {
  id: number;
  wardNumber: number;
  wardNumberNepali: string;

  constructor(id: number, wardNumber: number, wardNumberNepali: string) {
    this.id = id;
    this.wardNumber = wardNumber;
    this.wardNumberNepali = wardNumberNepali;
  }
  static plainToInstance(plainData: object): Ward {
    return plainToClass(Ward, plainData);
  }
  static plainToInstances(plainData: object[]): Ward[] {
    return plainToClass(Ward, plainData);
  }
}
export default Ward;
