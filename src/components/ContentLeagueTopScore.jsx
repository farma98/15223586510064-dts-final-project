import React from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useTopScoreBySeasonIdQuery } from "../services/sportmonksApi";

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

const ContentLeagueTopScore = () => {
  const { data, error, isLoading } = useTopScoreBySeasonIdQuery();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>POS</StyledTableCell>
            <StyledTableCell align="center">PLAYER</StyledTableCell>
            <StyledTableCell align="center">TEAM</StyledTableCell>
            <StyledTableCell align="center">GOAL</StyledTableCell>
            <StyledTableCell align="center">PENALTY</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {error ? (
            <>Ada error di sini nih ...</>
          ) : isLoading ? (
            <>Loading data dulu yah ...</>
          ) : (
            data.data.goalscorers.data.slice(0, 10).map((row) => (
              <StyledTableRow key={row.player_id}>
                <StyledTableCell component="th" scope="row">
                  {row.position}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.player_id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.team_id}</StyledTableCell>
                <StyledTableCell align="center">{row.goals}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.penalty_goals}
                </StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContentLeagueTopScore;
