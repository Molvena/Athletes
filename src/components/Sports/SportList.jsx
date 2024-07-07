import { useContext, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import { SportCard } from "../index";
import { SportContext } from "../../context/index";
import { useSports } from "../../hooks/index";

export const SportList = () => {
  const { stateSport } = useContext(SportContext);
  //console.log("state Sports", stateSport);
  const { getAllSports } = useSports();

  useEffect(() => {
    if (!stateSport.dataSport || stateSport.dataSport.length === 0) {
      getAllSports();
    }
  }, []);

  return (
    <Container maxWidth="xl">
      {/* Contenedor de la lista de sports */}
      <Stack spacing={2} justifyContent="flex-start">
        {stateSport?.dataSport?.map((sport) => (
          <Stack key={sport._id} xs={6} sm={6} md={8} lg={12}>
            {/* Card del athlete */}
            <SportCard sport={sport} />
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};
