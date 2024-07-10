import { Header, AthleteForm, Footer, HeaderBar } from "../../components/index";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export const CreateAthlete = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "90vh",
      }}
    >
      <Header />
      <HeaderBar />
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AthleteForm />
      </Box>
      <Footer />
    </Box>
  );
};
