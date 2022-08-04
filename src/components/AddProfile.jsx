import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

// import { getDatabase } from "../authentications/firebase.js";
import { getDatabase, ref, set } from "firebase/database";

const AddProfile = () => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [job, setJob] = useState("");

  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleOnChangeAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleOnChangeJob = (e) => {
    setJob(e.target.value);
  };

  //   const createProfile = () => {
  //     const profileRef = database().ref("Users");
  //     const profile = {
  //       username,
  //       address,
  //       job,
  //       complete: false,
  //     };

  //     profileRef.push(profile);
  //   };

  function createProfile(userId, username, address, job) {
    const db = getDatabase();
    set(ref(db, "users/"), {
      userId: userId,
      username: username,
      address: address,
      job: job,
    });
  }

  return (
    <>
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          sx={{ m: 1, bgcolor: "secondary.main", width: 56, height: 56 }}
          src={`${process.env.PUBLIC_URL}/assets/img/logo-2.png`}
          alt="Logo Movie"
        />
        <Typography component="h1" variant="h5">
          PROFILE
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Usename"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleOnChangeUsername}
            value={username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="address"
            label="Address"
            type="address"
            id="address"
            autoComplete="address"
            onChange={handleOnChangeAddress}
            value={address}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="job"
            label="Job"
            type="job"
            id="job"
            autoComplete="job"
            onChange={handleOnChangeJob}
            value={job}
          />

          <Button
            fullWidth
            size="large"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={createProfile}
          >
            SAVE
          </Button>

          <Grid container>
            <Grid item xs>
              <Link variant="subtitle1" to={`/dashboard`}>
                BACK
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AddProfile;
