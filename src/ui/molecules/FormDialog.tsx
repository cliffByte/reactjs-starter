import { useState, useEffect, useRef } from "react";

import Button from "../atoms/Button";
import Header from "../atoms/Header";
// * @ for dialog
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// * @ react-icons
import { AiOutlineClose } from "react-icons/ai";
import { RoleLevels } from "../../models/Admin";

type propsType= {
  children?: React.ReactNode;
  onCLose?: () => void;
  header?: string;
  onAdd?: () => void;
  isOpen?: boolean;
  roleLevel?: RoleLevels
};

const FormDialog =(props: propsType) => {
  // state for check open or hide
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const {roleLevel} = props;

 
  const descriptionElementRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return (
    <section className="">
      <div className="d-flex justify-content-between flex-wrap gap-3">
        {/* <Header title={props.header} /> */}
        <div></div>
        {(roleLevel && roleLevel == RoleLevels.ONE) &&<div className="d-flex">
          <Button
            onClick={()=>{
              if(!props.onAdd)return;
              props.onAdd();
            }}
          >
            Add Data
          </Button>
        </div>}
      </div>

      <Dialog fullWidth maxWidth="lg" open={props.isOpen || false} scroll={scroll}>
        <DialogTitle>
          <div className="d-flex justify-content-between">
            <div className="">
              <Header title={props.header} />
            </div>
            <div
              className="close"
              onClick={()=>{
                if(!props.onCLose)return;
                props.onCLose();
              }}
            >
              <AiOutlineClose />
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText ref={descriptionElementRef} tabIndex={-1}>
            {/* //* @ add form */}
            {props.children}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default FormDialog;
