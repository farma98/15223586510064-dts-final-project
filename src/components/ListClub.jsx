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

import { Link } from "react-router-dom";

import { useClubBySeasonIdQuery } from "../services/sportmonksApi";

const ListClub = () => {
  const { data, error, isLoading } = useClubBySeasonIdQuery();
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
        List Club
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
                    image={contentItem.logo_path}
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {contentItem.name}
                    </Typography>
                    <Typography>{contentItem.founded}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">{contentItem.short_code}</Button>
                    <Link
                      variant="subtitle1"
                      to={`/club-detail/${contentItem.id}`}
                    >
                      Detail
                    </Link>
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

export default ListClub;
