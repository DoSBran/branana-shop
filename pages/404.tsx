import { ShopLayout } from "@/components/layouts";
import { Box, Typography } from "@mui/material";

const Custome404 = () => {
  return (
    <ShopLayout title="page not fout" pageDescription="La pagina no existe">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100vh - 200px)",
          flexDirection: {xs: 'column', sm:'row'}
        }}
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={100}>
          404 |
        </Typography>
        <Typography marginLeft={2}>
          No encontramos ninguna pagina aqui
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custome404;
