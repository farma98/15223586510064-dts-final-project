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

import { useTeamSquadByIdQuery } from "../services/sportmonksApi";

import { useParams } from "react-router-dom";

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

const ContentSquadClub = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useTeamSquadByIdQuery({ id });
  console.log(data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>POS</StyledTableCell>
            <StyledTableCell align="center">PHOTO</StyledTableCell>
            <StyledTableCell align="center">PLAYER</StyledTableCell>
            <StyledTableCell align="center">POSITION</StyledTableCell>
            <StyledTableCell align="center">NUMBER</StyledTableCell>
            <StyledTableCell align="center">MINUTE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {error ? (
            <>Ada error di sini nih ...</>
          ) : isLoading ? (
            <>Loading data dulu yah ...</>
          ) : (
            data.data.squad.data.map((row, index) => (
              <StyledTableRow key={row.player_id}>
                <StyledTableCell align="center">{index + 1}</StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <Avatar
                    alt={row.player_id}
                    src={row.player.data.image_path}
                  />
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.player_id}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.position_id}
                </StyledTableCell>
                <StyledTableCell align="center">{row.number}</StyledTableCell>
                <StyledTableCell align="center">{row.minutes}</StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContentSquadClub;
