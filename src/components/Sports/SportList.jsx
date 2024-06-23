import { useContext } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { SportCard } from "../index";
import { InfoContext } from "../../context/index";
import { useSports } from "../../hooks/index";

export const SportList = () => {
  const { state } = useContext(InfoContext);
  const { useGetAllSports } = useSports();
  useGetAllSports();
  return (
    <Container maxWidth="xl">
      {/* Contenedor de la lista de athletes */}
      <Stack container spacing={2} justifyContent="flex-start">
        {state?.data?.map((sport) => (
          <Stack item key={sport.id} xs={6} sm={6} md={8} lg={12}>
            {/* Card del athlete */}
            <SportCard sport={sport} />
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};
