import { plainToClass } from "class-transformer";
import Province from "./Province";

class District {
  id: number;
  districtTitle: string;
  districtTitleNepali: string;
  code: number;

  constructor(
    id: number,
    province: Province,
    districtTitle: string,
    districtTitleNepali: string,
    code: number
  ) {
    this.id = id;
    this.districtTitle = districtTitle;
    this.districtTitleNepali = districtTitleNepali;
    this.code = code;
  }
  static plainToInstance(plainData: object): District {
    return plainToClass(District, plainData);
  }
  static plainToInstances(plainData: object[]): District[] {
    return plainToClass(District, plainData);
  }
}
export default District;
