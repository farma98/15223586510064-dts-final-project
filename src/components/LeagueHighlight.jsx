import React from "react";
import Paper from "@mui/material/Paper";

const LeagueHighlight = () => {
  return (
    <Paper
      sx={{
        position: "relative",
        backgroundColor: "grey.800",
        color: "#fff",
        mb: 4,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "480px",
      }}
    >
      <iframe
        width="1152"
        height="480"
        src="https://www.youtube.com/embed/_plKjxo206k"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Higlight Scottish League"
      />
    </Paper>
  );
};

export default LeagueHighlight;
