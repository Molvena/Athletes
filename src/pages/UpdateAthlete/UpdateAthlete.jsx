import {
  Header,
  UpdateAthleteForm,
  Footer,
  HeaderBar,
} from "../../components/index";
import { Outlet } from "react-router-dom";
import { useAthletes } from "../../hooks/useAthletes";
import { useSearchParams, useParams } from "react-router-dom";
import { Box } from "@mui/material";

export const UpdateAthlete = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  let { id } = useParams();
  console.log("🚀 ~ UpdateAthlete ~ id:", id);

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
        <UpdateAthleteForm athleteId={id} />
      </Box>
      <Footer />
    </Box>
  );
};
