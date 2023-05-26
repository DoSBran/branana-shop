import { SizesInterface } from "@/interfaces"
import { Box, Button } from "@mui/material";
import { FC } from "react"

interface Props {
    sizes: SizesInterface[];
    selectedSizes?: SizesInterface;
}

export const ProductSizeSelector: FC<Props> = ({sizes, selectedSizes}) => {
  return (
    <Box>
        {sizes.map(size => (
            <Button color={selectedSizes !== size? 'primary': 'info'} key={size} size='small'>{size}</Button>
        ))}
    </Box>
  )
}
