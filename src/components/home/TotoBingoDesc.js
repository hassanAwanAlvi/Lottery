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
          Toto Bingo de Hoy<br /> - al instante - 
          <hr className={classes.line} />
        </Typography>
        <Typography className={classes.PozoPara}>
         El Toto Bingo es un juego de azar versión simplificada del bingo pero a gran escala, perteneciente a Lotería de la Provincia de Córdoba Sociedad del Estado. Lotería de la Provincia de Córdoba Sociedad del Estado tiene por objeto la organización, dirección, administración y explotación de juegos de azar, en particular loterías, casinos, rifas, tómbolas, bonos de contribución y actividades concurrentes y afines.  <br /><br />

        El Toto Bingo se vende en diversas provincias:  Provincia de Córdoba, Ciudad de Buenos Aires, Capital Federal, Provincia de Santa Fe, San Luis y Jujuy. Toto Bingo, consiste en un boleto preimpreso con dos zonas de juego. El cartón de juego, identificado por número de sorteo y número de cartón, las 2 zonas de juego son Ganá o Ganá con la modalidad Sortea hasta que Sale y Pozo Millonario). <br /><br />
    
         En el evento correspondiente se empieza por la extracción de bolillas para el Juego 1 hasta que el sistema informático detecta e informa la aparición de ganadores y luego se efectúa la extracción de bolillas para el Juego 2. De existir pozos vacantes, en cualquier categoría, el monto generado en ese sorteo se incorporará al monto destinado para el Pozo del Premio Mayor. <br /><br />
    
         El sorteo se realiza todos los domingos a las 11:55 horas y puede verse en el Canal 13 de Rio Cuarto y Crónica TV para todo el país. La prescripción de los premios se encuentra establecida en el Reglamento de cada uno de los juegos y detallada en la Programación vigente de los mismos.
        </Typography>
      </Grid>
    </div>
  );
};

export default Pozo;
