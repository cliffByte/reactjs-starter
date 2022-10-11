import { GridRenderCellParams } from "@mui/x-data-grid";
import { AiFillCheckCircle, AiFillDelete, AiFillEdit, AiFillPlayCircle } from "react-icons/ai";
import Admin, { RoleLevels } from "../../models/Admin";
import Pond, { Statuses } from "../../models/Pond";
import CustomButton from "../atoms/CustomButton";

const ActionCell = (
    cellVal: GridRenderCellParams<any, any, any>,
    admin: Admin,
    editClick: () => void,
    deleteClick: () => void,
    forwardClick: () => void,
    acceptClick: () => void
  ) => {
    return (
      <>
        {((admin.roleLevel === RoleLevels.ONE &&
          (cellVal.row as Pond).status === Statuses.draft) ||
          (admin.roleLevel === RoleLevels.TWO &&
            (cellVal.row as Pond).status === Statuses.new)) && (
          <CustomButton
            variant="warning"
            size="small"
            style={{ padding: 10 }}
            title="Edit"
            onClick={editClick}
          >
            <AiFillEdit />
          </CustomButton>
        )}
        {admin.roleLevel === RoleLevels.ONE &&
          (cellVal.row as Pond).status === Statuses.draft && (
            <CustomButton
              variant="tenerary_outline"
              size="small"
              style={{ padding: 10 }}
              title="Delete"
              onClick={deleteClick}
            >
              <AiFillDelete />
            </CustomButton>
          )}
        {admin.roleLevel === RoleLevels.TWO &&
          (cellVal.row as Pond).status === Statuses.new && (
            <CustomButton
              variant="tenerary_outline"
              size="medium"
              style={{ padding: 10 }}
              title="Forward"
              onClick={forwardClick}
            >
              <AiFillPlayCircle style={{ color: "green" }} />
            </CustomButton>
          )}
        {admin.roleLevel === RoleLevels.THREE &&
          (cellVal.row as Pond).status === Statuses.onProgress && (
            <CustomButton
              variant="tenerary_outline"
              size="medium"
              style={{ padding: 10 }}
              title="Accept"
              onClick={acceptClick}
            >
              <AiFillCheckCircle style={{ color: "green" }} />
            </CustomButton>
          )}
      </>
    );
  };
export default ActionCell;