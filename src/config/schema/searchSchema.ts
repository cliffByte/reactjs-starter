import * as Yup from "yup";
// text constant
import text from "../constant/text";

export const searchSchema = Yup.object().shape({
  search: Yup.string().required(text.SEARCH_REQUIRED),
});
