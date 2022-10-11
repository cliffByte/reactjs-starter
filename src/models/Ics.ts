import { plainToClass } from "class-transformer";
import Address from "./Address";
import { CasteEthnicity, Gender } from "./Global.type";

class Ics {
  id: string;
  nameOfBeneficiary: string;
  address: Address;
  typeOfIcs: string;
  gender: Gender;
  casteEthnicity: CasteEthnicity;
  isYouth: boolean;
  // fuelWoodConsumption
  remarks: string;
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(
    id: string,
    nameOfBeneficiary: string,
    address: Address,
    typeOfIcs: string,
    gender: Gender,
    casteEthnicity: CasteEthnicity,
    isYouth: boolean,
    // fuelWoodConsumption
    remarks: string,
    createdAt: Date | null,
    updatedAt: Date | null
  ) {
    this.id = id;
    this.nameOfBeneficiary = nameOfBeneficiary;
    this.address = address;
    this.typeOfIcs = typeOfIcs;
    this.gender = gender;
    this.casteEthnicity = casteEthnicity;
    this.isYouth = isYouth;
    // fuelWoodConsumption
    this.remarks = remarks;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static plainToInstance(plainData: object): Ics {
    return plainToClass(Ics, plainData);
  }
  static plainToInstances(plainData: object[]): Ics[] {
    return plainToClass(Ics, plainData);
  }
}

export default Ics;
