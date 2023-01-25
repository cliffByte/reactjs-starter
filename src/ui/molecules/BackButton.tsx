// import { UTILITIES_LABELS } from "@localization/utilities";
// import useLang from "@hooks/useLang";
import { useNavigate } from "react-router";

interface IProps {
  navigationURL: string;
  backReplace?: boolean;
  values: Array<any>;
}
const BackButton = ({ navigationURL, backReplace = false, values }: IProps) => {
  //   const { lang } = useLang();
  const navigate = useNavigate();
  return (
    <div>
      <h3>
        <i
          onClick={() => {
            // Check if there exists some values or not.. If yes, then ask for confirmation
            // console.log("values from back outside", values);

            if (values && values.some((v) => v !== "")) {
              console.log("values from back", values);
              // eslint-disable-next-line no-restricted-globals
              let d = confirm(
                // UTILITIES_LABELS[
                "You might have some unsaved changes, Are you sure you want to leave the screen?"
                // ][lang]
              );
              if (d) navigate(navigationURL, { replace: backReplace });
            } else navigate(navigationURL, { replace: backReplace });
            //else navigate without confirmation dialog.
          }}
          className="bi bi-arrow-left-circle primary_color"
          style={{ cursor: "pointer" }}
        ></i>
      </h3>
    </div>
  );
};

export default BackButton;
