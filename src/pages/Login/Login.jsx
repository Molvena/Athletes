import { Header, UserForm, Footer, HeaderBar } from "../../components/index";
import { Box } from "@mui/material";

export const Login = () => {
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
        <UserForm />
      </Box>
      <Footer />
    </Box>
  );
};
