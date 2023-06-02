import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  counter: (number: number) => void;
  quantity: number;
  max: number
}

export const Itemcounter: FC<Props> = ({ counter, quantity, max }) => {
  return (
    <Box display="flex" alignItems="center">
      <IconButton onClick={() => counter(quantity > 1 ? -1 : 0)}>
        <RemoveCircleOutline />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: "center" }}>
        {quantity}
      </Typography>
      <IconButton onClick={() => counter(quantity < max ?1:0)}>
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
};
