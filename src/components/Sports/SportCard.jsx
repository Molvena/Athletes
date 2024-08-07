import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  ListItem,
} from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { BaseTheme } from "../../themes/base";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";

import ListItemText from "@mui/material/ListItemText";

export const SportCard = ({ sport }) => {
  return (
    <ThemeProvider theme={BaseTheme}>
      <Card
        sx={{
          display: "flex",
          height: "180px",
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
            image={sport.image}
            alt={sport.name}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>

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
              textAlign: "center",
            }}
          >
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              noWrap
              sx={{
                padding: "4",
              }}
            >
              {sport.name}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Modalidades: {sport.modalidades}
            </Typography>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              sx={{
                width: "30%",
                margin: "10px auto 0px",
              }}
            >
              Comentarios
            </Button>
          </CardContent>
        </Box>

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
          <Typography variant="body2" color="text.primary">
            Deportistas
          </Typography>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              padding: 1,
              borderRadius: "20px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            {sport.athletes && sport.athletes.length > 0 ? (
              sport.athletes.map((athlete) => (
                <ListItem
                  key={athlete._id}
                  sx={{
                    padding: "0px 8px",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <ListItemText
                    primary={athlete.name}
                    sx={{ textAlign: "center", margin: 0 }}
                  />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText primary="Sin Atletas" />
              </ListItem>
            )}
          </List>
        </Box>
      </Card>
    </ThemeProvider>
  );
};
