import React from "react";
import ContentProfileVenue from "../components/ContentProfileVenue";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

const ContentDetailVenue = () => {
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
        PROFILE VENUE
      </Typography>
      <Divider />
      <Container sx={{ py: 2 }} maxWidth="md">
        <ContentProfileVenue />
      </Container>
    </Grid>
  );
};

export default ContentDetailVenue;
