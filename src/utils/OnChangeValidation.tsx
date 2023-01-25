import { useState } from "react";

const OnChangeValidation = () => {
  const [activeValidation, setActiveValidation] = useState(false);

  // for check input validation on change after click
  // handle active validation
  // validation form on change after submit
  const handleActiveValidation = () => {
    setActiveValidation(true);
  };

  // @ return handleActiveValidation function for set active validation on change
  // @ return activeValidation sate for check submit button is clicked or not
  return { handleActiveValidation, activeValidation };
};

export default OnChangeValidation;
