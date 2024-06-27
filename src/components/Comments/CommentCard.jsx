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
import { NavLink, Link } from "react-router-dom";

export const CommentCard = ({ comment }) => {
  return (
    <ThemeProvider theme={BaseTheme}>
      <Card
        sx={{
          display: "flex",
          height: "auto",
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
            image={comment?.recipientAthlete?.image}
            alt={comment?.recipientAthlete?.name}
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
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Typography gutterBottom variant="h3" component="div" noWrap>
              {comment?.recipientAthlete?.name}
            </Typography>

            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                mt: 2,
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Comentario{comment.content}
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </ThemeProvider>
  );
};
