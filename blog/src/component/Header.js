// import React from 'react'
// import {Link} from 'gatsby'

// export default function Header(){
//   return(
//     <div>
//     <h1>Header</h1>
//     <nav>
//         <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/blog">Blog</Link></li>
//             <li><Link to="/contact">contact</Link></li>
//             <li><Link to="/about">About</Link></li>

//         </ul>
//     </nav>
//     </div>
//   )
// }


// import React from 'react';
import { Link } from 'gatsby';

// function NavBar() {

//   return (
// 	<div>
//         <Link to="/"> Home </Link>
//         <Link to="/about"> About </Link>
//         <Link to="/product"> Product </Link>
// 	</div>
//   );
// }

// export default NavBar;

import React from 'react';  
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'right'
  },
  link: {
    color: "#fff",
    padding: 10,
    "&:hover": {
        color: "#000000",
        textDecoration: "none"
    }
},  

}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        
        <Toolbar className="bg-success">
        <div className={classes.navcontainer}>
         <Link to="/" className={classes.link} > Home </Link>
         <Link to="/about" className={classes.link}> About </Link>
        <Link to="/blog" className={classes.link}>Blog</Link>
        <Link to="/contact" className={classes.link}>contact</Link>
         </div>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"> */}
            {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            Daily Blog's
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}