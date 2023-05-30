import { Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { nepaliUnicodes } from "../../config/constant/nepaliUnicode";
interface IProps {
  handleChange: Function;
  variant?: string;
  error?: boolean;
  multiline?: boolean;
  placeholder: string;
  rows?: number;
  value?: string;
  readOnly?: boolean;
}
const NepaliInput: React.FC<IProps> = (props) => {
  const handleChange = (val: string) => {
    props.handleChange(
      Array.from(val, (c: string) => {
        if (nepaliUnicodes?.[c]) {
          return nepaliUnicodes[c];
        }
        return c;
      }).join("")
    );
  };
  return (
    <>
      {props.multiline ? (
        <Textarea
          rows={props.rows ?? 3}
          value={props.value ?? ""}
          isInvalid={props.error}
          placeholder={props.placeholder}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      ) : (
        <Input
          variant={props.variant}
          type={"text"}
          size={"sm"}
          placeholder={props.placeholder}
          value={props.value ?? ""}
          isInvalid={props.error}
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          readOnly={props.readOnly ?? false}
        />
      )}
    </>
  );
};
NepaliInput.defaultProps = {
  multiline: false,
  error: false,
  value: "",
};
export default NepaliInput;
