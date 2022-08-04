import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import ContentHeader from "../components/ContentHeader";
import Footer from "../components/Footer";

const theme = createTheme();

const DashboardPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar title="SCOTTISH FOOTBALL LEAGUE" />
        <main>
          <ContentHeader />
        </main>
      </Container>
      <Footer
        title="152235865100-64@Mahfudin Dwi Prasetyo"
        description="Final Project ReactJS Digikominfo"
      />
    </ThemeProvider>
  );
};

export default DashboardPage;
