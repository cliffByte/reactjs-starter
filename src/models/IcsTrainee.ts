import { plainToClass } from "class-transformer";
import Address from "./Address";
import { CasteEthnicity, Gender } from "./Global.type";

class IcsTrainee {
  id: string;
  name: string;
  gender: Gender;
  isYouth: string;
  casteEthnicity: CasteEthnicity;
  address: Address;
  contactNumber: string;
  email: string;
  remarks: string;
  createdAt: Date | null;
  updatedAt: Date | null;

  constructor(
    id: string,
    name: string,
    gender: Gender,
    isYouth: string,
    casteEthnicity: CasteEthnicity,
    address: Address,
    contactNumber: string,
    email: string,
    remarks: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.isYouth = isYouth;
    this.casteEthnicity = casteEthnicity;
    this.address = address;
    this.contactNumber = contactNumber;
    this.email = email;
    this.remarks = remarks;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
  static plainToInstance(plainData: object): IcsTrainee {
    return plainToClass(IcsTrainee, plainData);
  }
  static plainToInstances(plainData: object[]): IcsTrainee[] {
    return plainToClass(IcsTrainee, plainData);
  }

  static processData=(icsTraineeData:IcsTrainee[]):object[]=>{
    let processedData: object[] = [];
    icsTraineeData.map((value,index,array)=>{
      console.log('----------',value)
      processedData.push({
        ...value,
       
        name:value.name,
        male:value.gender === 'male' ? 'M' :'',
        female:value.gender === 'female' ? 'F' :'',
        isYouth:value.isYouth,
        dalit:value.casteEthnicity==='dalit' ? true: '',
        janjati:value.casteEthnicity==='janjati' ? true: '',
        majhi:value.casteEthnicity==='majhi' ? true: '',
        BCT:value.casteEthnicity==='BCT' ? true: '',
        others:value.casteEthnicity==='others' ? true: '',
        province:value.address.province.provinceTitle,
        district:value.address.district.districtTitle,
        municipality:value.address.municipality.municipalityTitle,
        ward:value.address.ward.wardNumber,
        village:value.address.village,
        contactNumber:value.address.village,
        email:value.email,
        remarks:value.remarks,

        

      })
    })
    return processedData;
  }
}

export enum affiliatedNRMGroups {
  CBOs = "CBOs",
  UCs = "UCs",
}

export enum Types {
  NEW = "NEW",
  RENOVATION = "RENOVATION",
}

export type Dimension = {
  area: number;
  depth: number;
};

class CoFinanicngUSDGovernment {
  _provincial: number;
  _local: number;
  _federal: number;

  constructor(provincial: number, local: number, federal: number) {
    this._provincial = provincial;
    this._local = local;
    this._federal = federal;
  }
}

export default IcsTrainee;
