import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
      color: "#fff"
    }
  },
  Pozo: {
    display: "flex",
    justifyContent: "center",
    padding: "0 20px"
  },
  PozoHeading: {
    padding: "0.5rem 1rem",
    fontWeight: 600,
    fontFamily: "'Montserrat', sans-serif;",
    textAlign: "center",
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem"
    }
  },
  line: {
    height: "0.5rem",
    width: "30%",
    color: "black",
    backgroundColor: "#fcc43e;",
    border: "none"
  },
  PozoPara: {
    margin: "30px 0",
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "500",
    fontFamily: "'Montserrat', sans-serif;",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem 0",
      fontSize: "0.8rem"
    }
  }
}));

const Pozo = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container item xs={12} className={classes.Pozo}>
        <Typography variant="h2" component="h2" className={classes.PozoHeading}>
          Telekino de Hoy<br /> - al instante - 
          <hr className={classes.line} />
        </Typography>
        <Typography className={classes.PozoPara}>
         Telekino es un juego de azar de lotería muy popular en Argentina perteneciente a la Caja Popular de Ahorros de la Provincia de Tucumán. Esta lotería está a cargo de un comité proveniente de dicha Caja Popular en asociación con la empresa Loterking.  <br /><br />

         Este juego tiene orígenes que datan de hace más de veinte años. de hecho se hace efectuado de forma continua desde el domingo 26 de abril de 1992 cuando fue presentado por el conocido conductor Silvio Soldán, en la emisión del programa televisivo Feliz Domingo, a través de la pantalla del Canal 9 Libertad en conexión con el Canal 10 de Tucumán, y esta primera emisión del juego de azar llevó como resultado una recompensa de 100000 pesos argentinos como premio mayor.  <br /><br />
    
         Actualmente existen 4 variaciones de este juego: la versión tradicional simplemente llamada Telekino, siendo su procedimiento la extracción de quince bolillas al azar, las cuales están numeradas del 1 al 25, y que después son ordenadas de menor a mayor. Otras versiones son el Rekino, los Premios al número de cartón y el Metecinco. Este último tuvo un auge de sólo tres años después de lo cual desapareció, Existen diversas categorías de premios, pero sin duda el más buscado es el de primera ya que es el premio que se le otorga al ganador del Telekino, es decir, a aquel que haya obtenido los quince aciertos. <br /><br />
    
         Se le entrega más de la mitad del pozo total acumulado, agregados a los premios adicionales que ´pueden incluir casas, automóviles, viajes, y otros. Resulta llamativo que en 1999 Telekino decidió que la persona que obtuviera el premio principal seleccionara a una entidad para donación de comida, a esto se le conoce como Telekino Solidario.
        </Typography>
      </Grid>
    </div>
  );
};

export default Pozo;
