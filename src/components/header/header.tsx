import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../assets/logo.jpeg';
import menuItems from './menu-items';
import useStyles from './styles';
import {
  Grid,
  Button,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  MenuItem,
  useMediaQuery,
  Menu,
} from '@material-ui/core';

const Header = (props: any) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const handleMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL: any) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL: any) => {
    history.push(pageURL);
  };

  return (
    <Grid>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            className={classes.title}
            onClick={() => handleButtonClick('/')}
          >
            <img className={classes.logo} src={Logo} alt="logo" />
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon className={classes.menuIcon} />
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
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <Grid className={classes.headerOptions}>
              {menuItems.map((menuItem) => {
                const { menuTitle, pageURL } = menuItem;
                return (
                  <Button
                    onClick={() => handleButtonClick(pageURL)}
                    className={classes.button}
                  >
                    {menuTitle}
                  </Button>
                );
              })}
            </Grid>
          )}
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

export default withRouter(Header);
