import District from "./District";
import Municipality from "./Municipality";
import Province from "./Province";
import Ward from "./Ward";

class Address {
  province: Province;
  district: District;
  municipality: Municipality;
  ward: Ward;
  village: string;

  constructor(
    $province: Province,
    $district: District,
    $municipality: Municipality,
    $ward: Ward,
    $village: string
  ) {
    this.province = $province;
    this.district = $district;
    this.municipality = $municipality;
    this.ward = $ward;
    this.village = $village;
  }
}
export default Address;
