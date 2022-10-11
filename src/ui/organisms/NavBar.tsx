import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
// * @ for dialog
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  let user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname
    .slice(10)
    ?.replaceAll("/", "  ")
    ?.replaceAll("-", "  ");

  const { setUser } = useAuth();
  // function to handle logout
  const handleLogout = () => {
    // clear previous notification
    toast.dismiss();
    // notification
    toast.success("Logout successfully");
    // clear local storage token
    setUser(null);
    // close model
    setOpen(false);
    // navigate to login page
    navigate("/", { replace: true });
  };
  return (
    <>
      <section className="navbar_section">
        <div className="pathname">{pathname}</div>
        <div className="logout">
          <div className="">Welcome to {user?.role}</div>
          <div
            onClick={() => {
              setOpen(true);
            }}
          >
            <Button variant="primary_outline">Logout</Button>
          </div>
        </div>
      </section>
      <Dialog fullWidth maxWidth="sm" open={open}>
        <DialogTitle>
          <div className="d-flex justify-content-between">
            <div className="">Confirm Logout</div>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="primary_outline" onClick={() => setOpen(false)}>
            No
          </Button>
          <Button onClick={() => handleLogout()}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NavBar;
