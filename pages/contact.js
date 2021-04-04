import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Link from 'next/link';
import Head from 'next/head'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Head>
        <title>IslamicTools Web</title>
        <link rel="canonical" href="https://web.sego.app/contact" />
      </Head>
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
      <Link href="/" class="material-list-item"><ListItem button>
        <ListItemText primary="Home" />
    </ListItem></Link>
    <Link href="https://github.com/IslamicTools/islamic-tools-web" class="material-list-item"><ListItem button>
        <ListItemText primary="Contribute" />
    </ListItem></Link>
    {/* <Link href="/about-us" class="material-list-item"><ListItem button>
        <ListItemText primary="About Us" />
    </ListItem></Link> */}
    <Link href="/contact" class="material-list-item"><ListItem button>
        <ListItemText primary="Contact" />
    </ListItem></Link>
      </List>
      <Divider />
      <List>
      <Link href="/prayer-times" class="material-list-item"><ListItem button>
        <ListItemText primary="Prayer Times" />
    </ListItem></Link>
    {/* <Link href="/hijri" class="material-list-item"><ListItem button>
        <ListItemText primary="Hijri Calendar" />
    </ListItem></Link>
    <Link href="/holy-days" class="material-list-item"><ListItem button>
        <ListItemText primary="Holy Days" />
    </ListItem></Link>
    <Link href="/quran" class="material-list-item"><ListItem button>
        <ListItemText primary="Quran" />
    </ListItem></Link> */}
      </List>
    </div>
  </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            IslamicTools Web
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="islamic tools">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeEKxqgd7BI7--WDBf-rbhtERnccmesCh_odCuN0y3f0uOROQ/viewform?embedded=true" width="640" height="550" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
