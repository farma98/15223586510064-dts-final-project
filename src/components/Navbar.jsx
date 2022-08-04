import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signOutFromApp } from "../authentications/firebase.js";
import { auth } from "../authentications/firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";

import { styled, alpha } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginLeft: 0,
  marginRight: 0,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "0ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = (props) => {
  const { title } = props;
  const [user] = useAuthState(auth);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(
      {
        pathname: "/teams/search",
        search: `?query=${searchText}`,
      },
      {
        replace: true,
      }
    );
    setSearchText("");
  };

  const buttonLogoutOnClickHandler = async () => {
    await signOutFromApp();
    navigate("/");
  };

  return (
    <>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/logo-1.png`}
          style={{
            width: "100px",
          }}
          alt="Logo Football"
        />
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search Club..."
            inputProps={{ "aria-label": "search" }}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Search>
        {user ? (
          ""
        ) : (
          <Button variant="outlined" href="/login" size="small" sx={{ mr: 1 }}>
            LOGIN
          </Button>
        )}
        {user ? (
          <Button color="inherit" size="small" sx={{ mr: 1 }}>
            {user.email}
          </Button>
        ) : (
          ""
        )}
        {user ? (
          <Button
            variant="outlined"
            size="small"
            onClick={buttonLogoutOnClickHandler}
          >
            LOGOUT
          </Button>
        ) : (
          ""
        )}
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "end", overflowX: "auto" }}
      >
        <Button
          color="inherit"
          href="/"
          variant="body2"
          sx={{ p: 1, flexShrink: 0 }}
        >
          HOME
        </Button>
        <Button
          color="inherit"
          href="/league"
          variant="body2"
          sx={{ p: 1, flexShrink: 0 }}
        >
          LEAGUE
        </Button>
        <Button
          color="inherit"
          href="/club"
          variant="body2"
          sx={{ p: 1, flexShrink: 0 }}
        >
          CLUB
        </Button>
        <Button
          color="inherit"
          href="/venue"
          variant="body2"
          sx={{ p: 1, flexShrink: 0 }}
        >
          VENUE
        </Button>
        {user ? (
          <Button
            color="inherit"
            href="/dashboard"
            variant="body2"
            sx={{ p: 1, flexShrink: 0 }}
          >
            DASHBOARD
          </Button>
        ) : (
          ""
        )}
      </Toolbar>
    </>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
