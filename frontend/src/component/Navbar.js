import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Avatar,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  avatar: {
    width: theme.spacing(3.5),
    height: theme.spacing(3.5),
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const a = localStorage.getItem('currentUserName');
  
  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
    <AppBar position="fixed" style={{ background: '#2E3B55' }}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          JobBlitz
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                All Jobs
              </Button>
              <Avatar
                 className={classes.avatar}
              />
              <Button color="inherit" onClick={() => handleClick("/profile")}>
               Hi, {a}
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Avatar
                 className={classes.avatar}
              />
              <Button color="inherit" onClick={() => handleClick("/newprofile")}>
                Hi, {a}
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Edit Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
