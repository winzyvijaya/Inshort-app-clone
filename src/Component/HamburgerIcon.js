import * as React from 'react';
// import {Styled } from "@mui/material/styles";
// import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import category from '../Data/category';
// import useMediaQuery from '@mui/material/useMediaQuery';

// import {
//     createMuiTheme,
//     ThemeProvider,
    
//   } from "@mui/material/styles";

//   const useStyles = Styled({
//   list: {
//     width: 200, // changed
  
//   },
//   fullList: {
//     width: "auto",
//   },
// });

export default function SwipeableTemporaryDrawer({setCategary}) {
  // const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
    
  });
  //--------------------------------------------------------

  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // const theme = React.useMemo(
  //   () =>
  //     createMuiTheme({
  //       palette: {
  //         type: prefersDarkMode ? "dark" : "light",
  //       },
  //     }),
  //   [prefersDarkMode]
  // );

  //---------------------------------------------------------
//dark theme pallet

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ff5252',
      },
    },
  });
  
  //---------------------------------------------------
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

          <ListItem>Categaries</ListItem>
  
      </List>
      <Divider />
      <List>
        {category.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onclick={() =>setCategary(text)} >
            
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>
            <MenuIcon/>
          </Button>
          <ThemeProvider theme={darkTheme}>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}>
            {list('left')}
          </SwipeableDrawer>
          </ThemeProvider>
         
        </React.Fragment>
     
    </div>
  );
}