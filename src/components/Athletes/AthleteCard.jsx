import{
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box
} from "@mui/material";
import {ThemeProvider} from '@mui/system';
import { BaseTheme } from "../../themes/base";

export const AthleteCard = ({athlete}) => {
  return (
    <ThemeProvider theme={BaseTheme}>
    <Card
      sx={{
        display: 'flex',
        height:"180px",
        width: "95vh",
        borderRadius: "40px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "0.3s ease-in-out",
        "&:hover": { boxShadow: "0 20px 20px rgba(0,0,0,0.2)" },
        bgcolor: 'background.paper',
      }}
    >
    {/* Imagen del athlete--> La meto en un Box para poder ponerla a la izquierda*/}
        <Box
            sx={{
              width: '30%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: "40px 0 0 40px",
            }}
          >
        <CardMedia
          component="img"
          image={athlete.image}
          alt={athlete.name}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        </Box>
    {/* Informacion del athleta--> La meto en un Box para poder ponerla en medio*/}
        <Box
            sx={{
              width: '50%',              
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: 2,
            }}
          >
        <CardContent
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      height: '100%',
                    }}>

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
 {/* Deporte--> La meto en un Box para poder ponerla a la derecha*/}
        <Box
            sx={{
               width: '20%',
               alignItems: 'center',
               justifyContent: 'center',
               display:"flex",
               flexDirection: 'column',
              
            }}>
          <Typography variant="h6" component="div" sx={{ paddingTop: "8px" }}>
            Deporte:
          </Typography>
          <Typography variant="h6" component="div" sx={{ paddingTop: "8px" }}>
            {athlete.sports}
          </Typography>
          </Box>
    
    </Card>
    </ThemeProvider>
    
  )
}
