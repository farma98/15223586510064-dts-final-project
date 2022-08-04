import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";

import { auth } from "../authentications/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ContentProfile = () => {
  const [user] = useAuthState(auth);
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              EDIT PROFILE
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {user.email}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              <Link variant="subtitle1" to={`/dashboard`}>
                BACK
              </Link>
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={`${process.env.PUBLIC_URL}/assets/img/logo-1.png`}
            alt="Random"
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default ContentProfile;
