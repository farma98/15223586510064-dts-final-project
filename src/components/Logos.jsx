import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const logos = [
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-1.png` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-2.jpg` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-3.png` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-4.jpg` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-5.png` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-6.jpg` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-7.png` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-8.jpg` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-9.png` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-10.png` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-11.jpg` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-12.jpg` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-13.png` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-14.png` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-15.jpg` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-16.png` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-17.jpg` },
  { img: `${process.env.PUBLIC_URL}/assets/img/sponsor-18.jpg` },
];

const Logos = () => {
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Sponsor
      </Typography>
      <Divider />
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {logos.map((logo) => (
            <Grid item key={logo.img} xs={12} sm={6} md={2}>
              <Avatar src={logo.img} style={{ width: "80px" }} alt="Sponsor" />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Grid>
  );
};

export default Logos;
