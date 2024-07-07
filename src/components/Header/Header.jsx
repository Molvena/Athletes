import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../hooks/index";
import { ThemeProvider } from "@mui/system";
import { BaseTheme } from "../../themes/base";

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <ThemeProvider theme={BaseTheme}>
        <AppBar
          position="static"
          sx={{
            display: "flex",

            justifyContent: "space-between",
            padding: "0 20px",
            borderRadius: "30px 30px 0 0",
          }}
        >
          <Toolbar>
            {/* Botón del menú */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, color: "#9cc5b5" }}
            >
              Sports Web
            </Typography>

            {user && (
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: "#9cc5b5" }}
              >
                Hola {user.name}
              </Typography>
            )}

            <NavLink to="/sports">
              <Button
                variant="text"
                sx={{
                  color: "#9cc5b5",
                  "&:hover": {
                    color: "#d4e6df",
                  },
                }}
              >
                DEPORTES
              </Button>
            </NavLink>

            <NavLink to="/">
              <Button
                variant="text"
                sx={{
                  color: "#9cc5b5",
                  "&:hover": {
                    color: "#d4e6df",
                  },
                }}
              >
                DEPORTISTAS
              </Button>
            </NavLink>

            <NavLink to="/comments">
              <Button
                variant="text"
                sx={{
                  color: "#9cc5b5",
                  "&:hover": {
                    color: "#d4e6df",
                  },
                }}
              >
                Comentarios
              </Button>
            </NavLink>

            <NavLink to="/">
              <Button
                variant="text"
                sx={{
                  color: "#9cc5b5",
                  "&:hover": {
                    color: "#d4e6df",
                  },
                }}
              >
                HOME
              </Button>
            </NavLink>

            <NavLink to="/login">
              {!user && (
                <Button
                  variant="text"
                  sx={{
                    color: "#9cc5b5",
                    "&:hover": {
                      color: "#d4e6df",
                    },
                  }}
                >
                  LOGIN
                </Button>
              )}
            </NavLink>

            <NavLink to="/">
              {/* Aqui le pongo la condicion para que solo me rederice el boton si existe user */}
              {user && (
                <Button
                  variant="text"
                  sx={{
                    color: "#9cc5b5",
                    "&:hover": {
                      color: "#d4e6df",
                    },
                  }}
                  onClick={logout}
                >
                  LOGOUT
                </Button>
              )}
            </NavLink>

            <Link to="dashboard/settings" replace>
              {/* Aqui le pongo la condicion para que solo me rederice el boton si existe user */}
              {user && (
                <Button
                  variant="text"
                  sx={{
                    color: "#9cc5b5",
                    "&:hover": {
                      color: "#d4e6df",
                    },
                  }}
                >
                  SETTINGS
                </Button>
              )}
            </Link>

            {/* Icono de cuenta de usuario */}
            <NavLink to="/signUp">
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
              ></IconButton>
            </NavLink>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
