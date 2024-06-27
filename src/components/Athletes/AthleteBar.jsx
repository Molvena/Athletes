import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@mui/material";

import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../hooks/index";
import { ThemeProvider } from "@mui/system";
import { BaseTheme } from "../../themes/base";

export const AthleteBar = () => {
  const { user } = useAuth();
  return (
    <>
      <ThemeProvider theme={BaseTheme}>
        <AppBar
          position="static"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "0 20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="text"
              component="div"
              sx={{ flexGrow: 1 }}
              color="secondary"
            >
              ESTÁS EN DEPORTISTAS
            </Typography>
          </Box>
          <Box
            sx={{
              width: "30%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "40px 0 0 40px",
            }}
          >
            <Link to="dashboard/CreateAthlete" replace>
              {/* Aqui le pongo la condicion para que solo me rederice el boton si existe user */}
              {user && (
                <Button variant="text" color="secondary">
                  Crear nuevo deportista
                </Button>
              )}
            </Link>
          </Box>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
