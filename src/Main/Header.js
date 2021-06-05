import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import { Box, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
    },
  },
}));

function Header(props) {
  const { history } = props;
  const [ navItems, setNavItems ] = useState([
    {
      id: 1,
      path: '',
      label: 'home'
    },
    {
      id: 2,
      path: 'ipbc',
      label: 'ipbc'
    },
    {
      id: 3,
      path: 'pastoral',
      label: 'pastoral'
    },
    {
      id: 4,
      path: 'messages',
      label: 'mensagens'
    },
    {
      id: 5,
      path: 'departments',
      label: 'departamentos'
    },
    {
      id: 6,
      path: 'contact',
      label: 'contato'
    },
  ]);
  const theme = useTheme();
  const showMenuItems = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="relative"
        elevation={0}
        style={{ backgroundColor: 'transparent' }}
      >
        <Toolbar
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            color: 'black',
            padding: 0,
          }}
        >
          <Typography variant="h6" className={classes.title}>
            IPBC Clone (Alpha)
          </Typography>
            <Box
            >
              {
                showMenuItems
                ? (
                  <>
                    <IconButton edge="start" aria-haspopup="true" color="inherit" aria-label="menu" onClick={handleMenu}>
                      <MenuIcon />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={open}
                      onClose={() => setAnchorEl(null)}
                    >
                      {
                        navItems.map((navItem) => {
                          return(
                            <MenuItem
                              onClick={() => handleMenuClick(`/${ navItem.path }`)}
                              style={{
                                textTransform: 'capitalize',
                              }}
                            >
                              { navItem.label }
                            </MenuItem>
                          );
                        })
                      }

                    </Menu>
                  </>
                ) : (
                  <>
                  <Box
                    style={{
                      width: '100%',
                      display: 'flex',
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {
                        navItems.map((navItem) => {
                          return(
                            <MenuItem
                              onClick={() => handleMenuClick(`/${ navItem.path }`)}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                textTransform: 'capitalize',
                                margin: '.2rem',
                                justifyContent: 'space-between',
                                borderRadius: '5px',
                                backgroundColor: '#D7DE87',
                                color: '#395031',
                              }}
                            >
                              { navItem.label }
                            </MenuItem>
                          );
                        })
                      }
                  </Box>
                  </>
                )
              }

            </Box>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(Header);
