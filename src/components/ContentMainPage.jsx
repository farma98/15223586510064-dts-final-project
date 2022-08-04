import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { useFixturesByDateQuery } from "../services/sportmonksApi";

const ContentMainPage = () => {
  const { data, error, isLoading } = useFixturesByDateQuery();
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
        Fixtures
      </Typography>
      <Divider />
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {error ? (
            <>Ada error di sini nih ...</>
          ) : isLoading ? (
            <>Loading data dulu yah ...</>
          ) : (
            data.data.map((contentItem) => (
              <Grid item key={contentItem.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={contentItem.weather_report.icon}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {contentItem.time.starting_at.date_time}
                    </Typography>
                    <Typography>
                      {contentItem.formations.localteam_formation} vs
                      {contentItem.formations.visitorteam_formation}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">
                      {contentItem.weather_report.temperature.temp}
                    </Button>
                    <Button size="small">
                      {contentItem.weather_report.temperature.unit}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </Grid>
  );
};

export default ContentMainPage;
