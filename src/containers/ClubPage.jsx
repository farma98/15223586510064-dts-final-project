import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import ListClub from "../components/ListClub";
import Sidebar from "../components/Sidebar";
import Logos from "../components/Logos";
import Footer from "../components/Footer";

const theme = createTheme();

const ClubPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar title="SCOTTISH FOOTBALL LEAGUE" />
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <ListClub />
            <Sidebar />
          </Grid>
        </main>
        <Logos />
      </Container>
      <Footer
        title="152235865100-64@Mahfudin Dwi Prasetyo"
        description="Final Project ReactJS Digikominfo"
      />
    </ThemeProvider>
  );
};

export default ClubPage;
