import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Modal, Box, useTheme, Paper,
} from '@mui/material';
import { BsArrowRight } from 'react-icons/bs';

import { VscChromeClose } from 'react-icons/vsc';

const style = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '8px',
};

const DynamicModal =(props) =>{
  const theme = useTheme();
  const {
    open, handleClose, title, children, actions, width = '68%', height = '70%', className={},
  } = props;

  return (
    <div>
       <Modal
      sx={{ ...className }}
      open={open}
      onClose={(e) => {
        e.stopPropagation();
        handleClose(e);
      }}
    >
      <Paper sx={{
        ...style,
        width,
        height,
        [theme.breakpoints.down('md')]: {
          width: '100%',
          height: '100%',
          borderRadius: 0,
        },
      }}
      >
        <Box className="flex md:hidden justify-between w-full pt-4 px-5">
          <Box className="flex">
            <BsArrowRight
              className="w-7 h-7"
              onClick={(e) => {
                e.stopPropagation();
                handleClose(e);
              }}
            />
            <span className="pr-2">{title}</span>
          </Box>
          <Box>{actions}</Box>
        </Box>
        <Box className="w-full h-full">
          {
              children
            }
        </Box>
        <VscChromeClose
          className="hidden md:flex w-8 absolute -left-2 -top-3 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleClose(e);
          }}
        />
      </Paper>
    </Modal>
    </div>
   
  );
}

export default DynamicModal;