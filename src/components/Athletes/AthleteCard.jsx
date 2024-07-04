import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { BaseTheme } from "../../themes/base";
import { NavLink } from "react-router-dom";
import { useAthletes } from "../../hooks";

export const AthleteCard = ({ athlete }) => {
  //const { getSportById } = useSports();
  const { deleteAthleteById } = useAthletes();
  const deleteAthlete = async () => {
    try {
      await deleteAthleteById(athlete._id);
      // Aquí puedes añadir cualquier lógica adicional que necesites, como actualizar la lista de atletas.
      console.log(`El atleta ${athlete.name} ha sido eliminado.`);
    } catch (error) {
      console.error("Error al eliminar el atleta:", error);
    }
  };

  return (
    <ThemeProvider theme={BaseTheme}>
      <Card
        sx={{
          display: "flex",
          height: "250px",
          width: "95vh",
          borderRadius: "40px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          transition: "0.3s ease-in-out",
          "&:hover": { boxShadow: "0 20px 20px rgba(0,0,0,0.2)" },
          bgcolor: "background.paper",
        }}
      >
        {/* Imagen del athlete--> La meto en un Box para poder ponerla a la izquierda*/}
        <Box
          sx={{
            width: "30%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "40px 0 0 40px",
          }}
        >
          <CardMedia
            component="img"
            image={athlete.image}
            alt={athlete.name}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        {/* Informacion del athlete--> La meto en un Box para poder ponerla en medio*/}
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Typography gutterBottom variant="h3" component="div" noWrap>
              {athlete.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Año Nacimiento{athlete.year}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Género:{athlete.gender}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              País:{athlete.country}
            </Typography>
          </CardContent>
        </Box>
        {/* Deporte--> La meto en un Box para poder ponerla a la derecha
 y le añado un boton que me llevará a la card de ese deporte*/}
        <Box
          sx={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            padding: 2,
          }}
        >
          <Box>
            <NavLink
              to={
                athlete.sports && athlete.sports[0]
                  ? `/sport/${athlete.sports[0]._id}`
                  : "#"
              }
            >
              <Button
                variant="contained"
                size="large"
                color="secondary"
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50px",
                  marginBottom: 1,
                  fontWeight: "bold",
                }}
              >
                {athlete.sports && athlete.sports[0]
                  ? athlete.sports[0].name
                  : "Sin Deporte"}
              </Button>
            </NavLink>
          </Box>
          <NavLink to={`/comments/${athlete.comments}`}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              sx={{
                marginBottom: 1,
              }}
            >
              Comentarios
            </Button>
          </NavLink>
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={deleteAthlete}
          >
            Eliminar
          </Button>
          <NavLink to={`/dashboard/UpdateAthlete/${athlete._id}`}>
            <Button
              variant="outlined"
              size="small"
              color="primary"
              sx={{
                marginBottom: 1,
              }}
            >
              Editar
            </Button>
          </NavLink>
        </Box>
      </Card>
    </ThemeProvider>
  );
};
