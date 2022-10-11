import { plainToClass } from "class-transformer";

class Municipality {
  id: number;
  municipalityTitle: string;
  municipalityTitleNepali: string;
  code: number;

  constructor(
    id: number,
    municipalityTitle: string,
    municipalityTitleNepali: string,
    code: number
  ) {
    this.id = id;
    this.municipalityTitle = municipalityTitle;
    this.municipalityTitleNepali = municipalityTitleNepali;
    this.code = code;
  }
  static plainToInstance(plainData: object): Municipality {
    return plainToClass(Municipality, plainData);
  }
  static plainToInstances(plainData: object[]): Municipality[] {
    return plainToClass(Municipality, plainData);
  }
}
export default Municipality;
