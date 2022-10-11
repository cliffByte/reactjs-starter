import { plainToClass } from "class-transformer";

class Province {
  id: number;
  provinceTitle: string;
  provinceTitleNepali: string;
  code: number;

   

	constructor(id: number, provinceTitle: string, provinceTitleNepali: string, code: number) {
		this.id = id;
		this.provinceTitle = provinceTitle;
		this.provinceTitleNepali = provinceTitleNepali;
		this.code = code;
	}

	static plainToInstance(plainData: object): Province {
        return plainToClass(Province, plainData);
    }
    static plainToInstances(plainData: object[]): Province[] {
        return plainToClass(Province, plainData);
    }

      
}
export default Province;
