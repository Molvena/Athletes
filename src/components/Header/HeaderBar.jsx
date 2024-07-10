import { AppBar, Typography, Button, Box } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { BaseTheme } from "../../themes/base";

export const HeaderBar = () => {
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
            margin: "0 0 10px 0",
            borderRadius: "0 0 30px 30px",
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
              Sports Web
            </Typography>
          </Box>
        </AppBar>
      </ThemeProvider>
    </>
  );
};
