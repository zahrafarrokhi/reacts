import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { loadPatients } from "../lib/slices/patients";
import { HiPlus } from "react-icons/hi";

function PatientSelection() {
  // const dispatch = useDispatch();
  const patients = [
    {
      first_name: "a",
      last_name: "b",
    },
    {
      first_name: "a1",
      last_name: "b1",
    },
  ];
  const loadData = async () => {
    // await dispatch(loadPatients()).unwrap();
  };
  useEffect(() => {
    loadData();
  }, []);
  // const patients = useSelector((state) => state.patientReducer?.patients);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const theme = useTheme();

  const toggleMenu = (e) => {
    if (open) {
      setOpen(false);
      setAnchorEl(null);
    } else {
      setOpen(true);
      setAnchorEl(e.target);
    }
  };

  return (
    <Button
      variant="text"
      // color="black"
      className={`flex flex-row  relative`}
      onClick={(e) => toggleMenu(e)}
    >
      Test
      <Menu
        anchorEl={anchorEl}
        open={open}
        handleClose={toggleMenu}
        sx={{
          "& > .MuiPaper-root": {
            width: "200px",
            borderRadius: "1em",
            //mobile
            [theme.breakpoints.down("md")]: {
              position: "fixed",
              width: "auto",
              bottom: "0 !important",
              left: "5% !important",
              right: "5% !important",
              top: "unset !important",
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
            },
          },
        }}
      >
        {patients?.map((p) => (
          <MenuItem>
            <ListItemText inset>
              {p.first_name} {p.last_name}
            </ListItemText>
          </MenuItem>
        ))}
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <HiPlus className="text-primary text-lg" />
          </ListItemIcon>
          <ListItemText>بیمار جدید</ListItemText>
        </MenuItem>
      </Menu>
    </Button>
  );
}

export default PatientSelection;

