import{
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import {ThemeProvider} from '@mui/system';
import { BaseTheme } from "../../themes/base";

export const SportCard = ({sport}) => {
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
          image={sport.image}
          alt={sport.name}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        </Box>
    
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
            {sport.name}
          </Typography>
         
          <Typography variant="body2" color="text.secondary">
          Olímpico
          </Typography>   
          <Typography variant="body2" color="text.secondary">
          Modalidades: {sport.modalidades}
          </Typography>       
          <Typography variant="body2" color="text.secondary">
          más
          </Typography>  
              
       
        </CardContent>
        </Box>
 
        <Box
            sx={{
               width: '20%',
               alignItems: 'center',
               justifyContent: 'center',
               display:"flex",
               flexDirection: 'column',
               padding: 2,
              
            }}>

          <Button variant="contained" size="large" color="secondary"
            sx={{
              width: '100px',
              height: '100px',
              borderRadius: '50px',
              marginBottom: 2, 
              fontWeight: 'bold',
              }}          
          >
            {sport.athletes}
          </Button>
          <Button variant="contained" size="small" color="primary">
            Comentarios
          </Button>

          </Box>
    
    </Card>
    </ThemeProvider>
    
  )
}
