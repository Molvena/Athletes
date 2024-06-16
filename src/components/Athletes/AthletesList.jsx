

import Stack from '@mui/material/Stack';

import Container from "@mui/material/Container";
import athletes from "../Athletes/athletes.json";
import { AthleteCard } from "../index";


export const AthletesList = () => {
  return (
    <Container maxWidth="xl">
    {/* Contenedor de la lista de athletes */}
    <Stack container spacing={2} justifyContent="flex-start">
      {athletes.map((athlete) => (
        <Stack item key={athlete.id} xs={6} sm={6} md={8} lg={12}>
          {/* Card del athlete */}
          <AthleteCard athlete={athlete} />
        </Stack>
      ))}
    </Stack>
  </Container>
  )
}
