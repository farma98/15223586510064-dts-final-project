import React from "react";
import ContentLeagueTable from "../components/ContentLeagueTable";
import ContentLeagueTopScore from "../components/ContentLeagueTopScore";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";

const ContentLeague = () => {
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
        LEAGUE STANDING FULL VERSION
      </Typography>
      <Divider />
      <Container sx={{ py: 2 }} maxWidth="md">
        <ContentLeagueTable />
      </Container>
      <Typography variant="h6" gutterBottom>
        TOP SCORE
      </Typography>
      <Divider />
      <Container sx={{ py: 2 }} maxWidth="md">
        <ContentLeagueTopScore />
      </Container>
    </Grid>
  );
};

export default ContentLeague;
