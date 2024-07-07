import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Icon,
} from "@mui/material";

import { ThemeProvider } from "@mui/system";
import { BaseTheme } from "../../themes/base";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
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
            borderRadius: "30px 30px 30px 30px",
            margin: "10px 0 0 0",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#9cc5b5" }}
          >
            contacto
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#9cc5b5" }}
          >
            Sports Web
          </Typography>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              flexGrow: 1,
            }}
          >
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <InstagramIcon />
            </IconButton>
          </div>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
