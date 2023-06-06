import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  Link,
  Toolbar,
  Typography,
  InputAdornment,
} from "@mui/material";
import NextLink from "next/link";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useRouter } from "next/router";
import { CartContext, UiContext } from "@/context";
import { useContext, useState } from "react";
import { ClearOutlined } from "@mui/icons-material";

export const NavBar = () => {
  const { asPath, replace } = useRouter();
  const { toogleSideMenu } = useContext(UiContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(false);
  const {numberOfItems} = useContext(CartContext);

  const onSearch = () => {
    if (searchTerm.trim().length === 0) return;
    replace(`/search/${searchTerm}`);
    setSearch(false);
  };
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
        <Box sx={{ display: search ? "none" : { xs: "none", sm: "block" } }}>
          <NextLink href="/category/men" passHref legacyBehavior>
            <Link>
              <Button color={asPath === "/category/men" ? "primary" : "info"}>
                Hombres
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/women" passHref legacyBehavior>
            <Link>
              <Button color={asPath === "/category/women" ? "primary" : "info"}>
                Mujeres
              </Button>
            </Link>
          </NextLink>
          <NextLink href="/category/kid" passHref legacyBehavior>
            <Link>
              <Button color={asPath === "/category/kid" ? "primary" : "info"}>
                Niños
              </Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />

        <IconButton
          onClick={() => setSearch(true)}
          sx={{ display: !search ? { xs: "none", sm: "flex" } : "none" }}
        >
          <SearchOutlinedIcon />
        </IconButton>

        <Input
          sx={{ display: search ? { xs: "none", sm: "flex" } : "none" }}
          className="fadeIn"
          autoFocus
          onKeyPress={(e) => (e.key === "Enter" ? onSearch() : null)}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          placeholder="Buscar..."
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setSearch(false)}
              >
                <ClearOutlined />
              </IconButton>
            </InputAdornment>
          }
        />

        <IconButton
          onClick={() => toogleSideMenu()}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <SearchOutlinedIcon />
        </IconButton>

        <NextLink href="/cart" passHref legacyBehavior>
          <Link>
            <IconButton>
              <Badge badgeContent={numberOfItems > 9? '+9': numberOfItems} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <Button onClick={toogleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
