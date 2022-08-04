import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

import { useParams } from "react-router-dom";

import { useVenueByIdQuery } from "../services/sportmonksApi";

const ContentProfileVenue = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useVenueByIdQuery({ id });
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* End hero unit */}
      <Grid container spacing={4}>
        {error ? (
          <>Ada error di sini nih ...</>
        ) : isLoading ? (
          <>Loading data dulu yah ...</>
        ) : (
          <Grid item key={data.data.id} xs={12} sm={6} md={12}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                component="img"
                image={data.data.image_path}
                alt="random"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.data.name}
                </Typography>
                <Typography>{data.data.city}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small">{data.data.capacity}</Button>
                <Button size="small">{data.data.coordinates}</Button>
              </CardActions>
            </Card>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default ContentProfileVenue;
