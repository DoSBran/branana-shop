import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref legacyBehavior>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Branana |</Typography>
            <Typography sx={{ ml: 0.5 }}>Shop</Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box sx={{display: {xs: 'none', sm: 'block'}}}>
          <NextLink href="/category/men" passHref legacyBehavior>
            <Link>
              <Button>Hombres</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref legacyBehavior>
            <Link>
              <Button>Mujeres</Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" passHref legacyBehavior>
            <Link>
              <Button>Niños</Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />

        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>

        <NextLink href="/cart" passHref legacyBehavior>
          <Link>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <Button>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
