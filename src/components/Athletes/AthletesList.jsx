import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { AthleteCard } from "../index";
import { useAthletes } from "../../hooks/index";
import { InfoContext } from "../../context/index";
import { useContext } from "react";

export const AthletesList = () => {
  const { state } = useContext(InfoContext);
  console.log("state", state);
  const { useGetAllAthletes } = useAthletes();
  useGetAllAthletes();
  return (
    <Container maxWidth="xl">
      {/* Contenedor de la lista de athletes */}
      <Stack container spacing={2} justifyContent="flex-start">
        {state?.data?.map((athlete) => (
          <Stack item key={athlete.id} xs={6} sm={6} md={8} lg={12}>
            {/* Card del athlete */}
            <AthleteCard athlete={athlete} />
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};
