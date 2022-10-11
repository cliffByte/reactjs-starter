// import
import PrivateAxiosInstance from "../api/PrivateAxios";
import District from "../models/District";
import Municipality from "../models/Municipality";
import Province from "../models/Province";
import Ward from "../models/Ward";
import { Responses } from "../types/Response.type";

const useAddress = () => {
  // function to get list of locations
  // pass location type and id to get list of locations
  const getLocations = async (type: string, id?: number) => {
    let url = `/location/${type}`;
    let query = "";
    if (id) {
      query =
        type === "districts"
          ? `provinceId=${id}`
          : type === "municipalities"
          ? `districtId=${id}`
          : type === "wards"
          ? `municipalityId=${id}`
          : "";
    }
    try {
      const res = await PrivateAxiosInstance.get(url + "?" + query);
      return { success: true, data: res.data };
    } catch (err) {
      return { success: true };
    }
  };

  // *Function get districts
  const getDistricts = async (): Promise<Responses<District>> => {
    try {
      const res = await PrivateAxiosInstance.get(`/location/districts`);
      const data = District.plainToInstances(res.data.data);
      return {
        data,
        error: null,
      };
    } catch (err: any) {
      return {
        data: null,
        error: err.response.data.message,
      };
    }
  };

  // *Function get wards by municipality
  const getWardsByMunicipality = async (
    id: number | undefined
  ): Promise<Responses<Ward>> => {
    try {
      const res = await PrivateAxiosInstance.get(
        `/location/wards?municipalityId=${id}`
      );
      const data = Ward.plainToInstances(res.data.data[0].wards);
      return {
        data,
        error: null,
      };
    } catch (err: any) {
      return {
        data: null,
        error: err.response.data.message,
      };
    }
  };

  // *Function get municipalities by district
  const getMunicipalitiesByDistrict = async (
    id: number | undefined
  ): Promise<Responses<Municipality>> => {
    try {
      const res = await PrivateAxiosInstance.get(
        `/location/municipalities?districtId=${id}`
      );
      const data = Municipality.plainToInstances(
        res.data.data[0].municipalities
      );
      return {
        data,
        error: null,
      };
    } catch (err: any) {
      return {
        data: null,
        error: err.response.data.message,
      };
    }
  };

  // *Function get districts by province
  const getDistrictsByProvince = async (
    id: number | undefined
  ): Promise<Responses<District>> => {
    try {
      const res = await PrivateAxiosInstance.get(
        `/location/districts?provinceId=${id}`
      );
      const data = District.plainToInstances(res.data.data[0].districts);
      return {
        data,
        error: null,
      };
    } catch (err: any) {
      return {
        data: null,
        error: err.response.data.message,
      };
    }
  };

  // *Function get provinces
  const getProvinces = async (): Promise<Responses<Province>> => {
    try {
      const res = await PrivateAxiosInstance.get(`/location/provinces`);
      const data = Province.plainToInstances(res.data.data);
      return {
        data,
        error: null,
      };
    } catch (err: any) {
      return {
        data: null,
        error: err.response.data.message,
      };
    }
  };

  return {
    getLocations,
    getDistricts,
    getProvinces,
    getDistrictsByProvince,
    getMunicipalitiesByDistrict,
    getWardsByMunicipality,
  };
};
export default useAddress;
