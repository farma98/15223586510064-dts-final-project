import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { useStandingBySeasonIdQuery } from "../services/sportmonksApi";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const socialMediaLogo = {
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Sidebar = () => {
  const { data, error, isLoading } = useStandingBySeasonIdQuery();
  return (
    <Grid item xs={12} md={4}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          bgcolor: "grey.200",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/logo-3.png`}
          style={{
            width: "250px",
          }}
          alt="Logo Football"
        />
      </Paper>
      <Paper
        elevation={0}
        sx={{
          p: 2,
          bgcolor: "grey.200",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/assets/img/logo-4.png`}
          style={{
            width: "250px",
          }}
          alt="Logo Football"
        />
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        LEAGUE STANDING
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>POS</StyledTableCell>
              <StyledTableCell align="center">TEAM</StyledTableCell>
              <StyledTableCell align="center">PLY</StyledTableCell>
              <StyledTableCell align="center">GD</StyledTableCell>
              <StyledTableCell align="center">PTS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {error ? (
              <>Ada error di sini nih ...</>
            ) : isLoading ? (
              <>Loading data dulu yah ...</>
            ) : (
              data.data.map((row) => (
                <StyledTableRow key={row.team_id}>
                  <StyledTableCell component="th" scope="row">
                    {row.position}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.team_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.overall.games_played}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.overall.goal_diff}
                  </StyledTableCell>
                  <StyledTableCell align="center">{row.points}</StyledTableCell>
                </StyledTableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {socialMediaLogo.social.map((social) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={social.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <social.icon />
            <span>{social.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
};

export default Sidebar;
