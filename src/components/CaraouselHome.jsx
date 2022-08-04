import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

const CaraouselHome = ({ caraouselItem }) => {
  return (
    <Paper
      key={caraouselItem.id}
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url(${caraouselItem.image_path})`,
        height: "75vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,.3)",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: "relative",
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom
            >
              {caraouselItem.name}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {caraouselItem.address}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {caraouselItem.city}
            </Typography>
            <Link variant="subtitle1" to={`/venue-detail/${caraouselItem.id}`}>
              Klik Detail
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CaraouselHome;
