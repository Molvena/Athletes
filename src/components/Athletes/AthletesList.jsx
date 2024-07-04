import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { AthleteCard } from "../index";
import { useAthletes } from "../../hooks/index";
import { AthleteContext } from "../../context/index";
import { useContext, useEffect } from "react";

export const AthletesList = () => {
  const { state } = useContext(AthleteContext);
  console.log("state Athletes", state);
  const { getAllAthletes } = useAthletes();
  useEffect(() => {
    if (!state.data || state.data.length === 0) {
      getAllAthletes();
    }
  }, [getAllAthletes, state.data]);

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
