import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {NavLink, Link} from "react-router-dom";
import {useAuth} from "../../hooks/index";
import {ThemeProvider} from '@mui/system';
import { BaseTheme } from "../../themes/base";

export const Header = () => {

  const {user, logout} = useAuth();

  return (
    <>
    <ThemeProvider theme={BaseTheme}>
    <AppBar position="static">
   <Toolbar>
     {/* Botón del menú */}
     <IconButton
       size="large"
       edge="start"
       color="inherit"
       aria-label="menu"
       sx={{ mr: 2 }}
     >
       <MenuIcon />
     </IconButton>

     {/* Título de la tienda */}
     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      Header
     </Typography>

     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
       HOLA 
     </Typography>
     <NavLink to="/">
     <Button 
       variant="text"
       color="inherit"
     >
       HOME
     </Button>
     </NavLink>

     <NavLink to="/login">
     {!user &&(
     <Button 
       variant="text"
       color="inherit"
     >LOGIN
     </Button>
     )}
     </NavLink>

     <NavLink to="/">
       {/* Aqui le pongo la condicion para que solo me rederice el boton si existe user */}
      {user &&(
     <Button 
       variant="text"
       color="inherit"
       onClick={logout}
     >LOGOUT
     </Button>
     )}
     </NavLink>

     <Link to="dashboard/settings" replace>
       {/* Aqui le pongo la condicion para que solo me rederice el boton si existe user */}
      {user &&(
     <Button 
       variant="text"
       color="inherit"
     >SETTINGS
     </Button>
     )}
     </Link>

     <Link to="dashboard/profile" replace>
       {/* Aqui le pongo la condicion para que solo me rederice el boton si existe user */}
      {user &&(
     <Button 
       variant="text"
       color="inherit"
     >PROFILE
     </Button>
     )}
     </Link>

     {/* Icono de cuenta de usuario */}
     <NavLink to="/signUp">
     <IconButton
       size="large"
       edge="end"
       aria-label="account of current user"
       aria-controls="menu-appbar"
       aria-haspopup="true"
       color="inherit"
      
     >
       
     </IconButton>
     </NavLink>


   </Toolbar>
 </AppBar>
 </ThemeProvider>

 
</>
  )
}
