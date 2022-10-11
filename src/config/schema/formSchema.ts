import * as Yup from "yup";
// text constant
import text from "../constant/text";
export const hydroAndMetroSchema = Yup.object().shape({
  affliated_group: Yup.string().required(text.AFFILIATED_GROUP),
  renovation_type: Yup.string().required(text.RENOVATION_TYPE),
  pond_catagory: Yup.string().required(text.POND_CATEGORY),
  dimension_area: Yup.string().required(text.DIMENSION_AREA),
  dimension_depth: Yup.string().required(text.DIMENSION_DEPTH),
  pond_volume: Yup.string().required(text.POND_VOLUME),
  pond_use: Yup.string().required(text.POND_USE),
  estimated_area_conversation: Yup.string().required(
    text.ESTIMATED_AREA_BY_CONVERSATION
  ),
  estimated_area_immediate: Yup.string().required(
    text.ESTIMATED_AREA_BY_IMMEDIATE
  ),
  benfitted_hhs: Yup.string().required(text.BENEFITTED_HHS),
  start_date: Yup.string().required(text.START_DATE),
  end_date: Yup.string().required(text.END_DATE),
  project_support: Yup.string().required(text.PROJECT_SUPPORT),
  total: Yup.string().required(text.TOTAL),
  indicator_link: Yup.string().required(text.INDICATOR_LINK),
});
