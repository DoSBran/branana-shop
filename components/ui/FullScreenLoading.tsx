import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

export const FullScreenLoading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 200px)",
        flexDirection: 'column'
      }}
    >
      <Typography sx={{mb:3}}>Cargando...</Typography>
      <CircularProgress thickness={2} />
    </Box>
  );
};
