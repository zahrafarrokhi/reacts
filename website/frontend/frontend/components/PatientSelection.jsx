import React, { useState, useEffect } from "react";
import {
  Button,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { HiPlus } from "react-icons/hi";
//redux
import { useDispatch, useSelector } from "react-redux";
import { loadPatients, loginAsPatient } from "../lib/slices/patients";

function PatientSelection(props) {
  const { onOpen } = props;
  const [open, setOpen] = useState(false);
  // Anchor that points(ref) to button
  // used to position the menu below the button
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  //redux
  const patients = useSelector((state) => state.patientReducer?.patients);
  const patient = useSelector((state) => state.patientReducer?.patient);
  const user = useSelector((state) => state.authReducer?.me);
  const dispatch = useDispatch();
  const router = useRouter();

  // const patients = [
  //   {
  //     first_name: "a",
  //     last_name: "b",
  //   },
  //   {
  //     first_name: "a1",
  //     last_name: "b1",
  //   },
  // ];

  //loadPatients
  const loadData = async () => {
    await dispatch(loadPatients()).unwrap();
  };
  useEffect(() => {
    loadData();
  }, []);
  //loginAsPatient
  const loginPatient = (id) => {
    dispatch(loginAsPatient(id));
  };

  const toggleMenu = (e) => {
    if (open) {
      setOpen(false);
      setAnchorEl(null);
      if (onOpen) onOpen(false);
    } else {
      setOpen(true);
      setAnchorEl(e.target);
      if (onOpen) onOpen(true);
    }
  };

  return (
    <Button
      variant="text"
      color="textBlack"
      className={`flex flex-row  relative justify-start mx-8 text-ellipsis whitespace-nowrap w-[5ch]`}
      onClick={(e) => {
        if(patients && patients?.length > 0) toggleMenu(e)
        else if (!user) router.push('/auth/login');
        else rouetr.push('/patients/new');
      }}
    >
      {/*Test*/}
    {patient ? `${patient?.first_name} ${patient?.last_name}` : 'ورود'} 

      <Menu
        //Menu 
        //MenuItem
        //ListItemText and ListItemIcon
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
          <MenuItem
            onClick={() => {
              loginPatient(p.id);
            }}
          >
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
          <ListItemText onClick={(e) => {              
              router.push('/patients/new');
            }}>بیمار جدید</ListItemText>
        </MenuItem>
      </Menu>
    </Button>
  );
}

export default PatientSelection;
