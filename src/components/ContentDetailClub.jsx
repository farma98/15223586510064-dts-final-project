import React from "react";
import ContentProfileClub from "../components/ContentProfileClub";
import ContentSquadClub from "../components/ContentSquadClub";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

const ContentDetailClub = () => {
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
        PROFILE CLUB
      </Typography>
      <Divider />
      <Container sx={{ py: 2 }} maxWidth="md">
        <ContentProfileClub />
      </Container>
      <Typography variant="h6" gutterBottom>
        LIST SQUAD
      </Typography>
      <Divider />
      <Container sx={{ py: 2 }} maxWidth="md">
        <ContentSquadClub />
      </Container>
    </Grid>
  );
};

export default ContentDetailClub;
