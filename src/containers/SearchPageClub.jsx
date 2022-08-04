import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Logos from "../components/Logos";
import Footer from "../components/Footer";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import ClubItem from "../components/ClubItem";

import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { useSearchClubByNameQuery } from "../services/sportmonksApi";

const theme = createTheme();

const SearchPageClub = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [term, setTerm] = useState(searchParams.get("query"));

  const [clubs, setClubs] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (term === "") {
      navigate("/club");
    }
  }, [term, navigate]);

  const {
    data: searchResult,
    error,
    isLoading,
  } = useSearchClubByNameQuery({ term, page });

  useEffect(() => {
    if (!isLoading && !error) {
      setClubs((clubs) => {
        return [...clubs, ...searchResult.data];
      });
    }
  }, [searchResult, error, isLoading]);

  useEffect(() => {
    if (searchParams.get("query") !== term) {
      setClubs([]);
      setPage(1);
      setTerm(searchParams.get("query"));
    }
  }, [searchParams, term]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Navbar title="SCOTTISH FOOTBALL LEAGUE" />
        <main>
          <Grid container spacing={5} sx={{ mt: 3 }}>
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
                  {!isLoading &&
                    !error &&
                    clubs.map((club) => {
                      return (
                        <ClubItem
                          key={club.id}
                          club={{
                            ...club,
                          }}
                        />
                      );
                    })}
                </Grid>
              </Container>
            </Grid>
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

export default SearchPageClub;
