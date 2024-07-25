import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import myIcon from '../onlyIcon.png'


export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box sx={{display:"flex"}}>
      <Typography
          variant="h4"
          sx={{
            flexGrow: 1,
            fontWeight: 'bold',
            color: '#fff', 
            fontSize: '1.5rem',
            padding: "10px"
          }}
        >
          authentify
        </Typography>
        <Box
        component="img"
        sx={{
            height: 50,
            width: 100,
            padding:"5px"
        }}
        src={myIcon}
        />
        </Box>
      </AppBar>
    </Box>
  );
}