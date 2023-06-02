import { SizesInterface } from "@/interfaces"
import { Box, Button } from "@mui/material";
import { FC } from "react"

interface Props {
    sizes: SizesInterface[];
    selectedSizes?: SizesInterface;
    onSelectedSize: (size: SizesInterface) => void;
}

export const ProductSizeSelector: FC<Props> = ({sizes, selectedSizes,onSelectedSize}) => {
  return (
    <Box>
        {sizes.map(size => (
            <Button onClick={() => onSelectedSize(size)} color={selectedSizes !== size ? 'info': 'primary'} key={size} size='small'>{size}</Button>
        ))}
    </Box>
  )
}
