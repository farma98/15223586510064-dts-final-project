import React from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import { useStandingBySeasonIdQuery } from "../services/sportmonksApi";

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

const ContentLeagueTable = () => {
  const { data, error, isLoading } = useStandingBySeasonIdQuery();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>POS</StyledTableCell>
            <StyledTableCell align="center">LOGO</StyledTableCell>
            <StyledTableCell align="center">TEAM</StyledTableCell>
            <StyledTableCell align="center">PLY</StyledTableCell>
            <StyledTableCell align="center">WIN</StyledTableCell>
            <StyledTableCell align="center">DRAW</StyledTableCell>
            <StyledTableCell align="center">LOST</StyledTableCell>
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
                  <Avatar alt={row.team_name} src={row.team_logo} />
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.team_name}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.overall.games_played}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.overall.won}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.overall.draw}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.overall.lost}
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
  );
};

export default ContentLeagueTable;
