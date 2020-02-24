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
          Loto 5 de Hoy<br /> - al instante - 
          <hr className={classes.line} />
        </Typography>
        <Typography className={classes.PozoPara}>
         El juego de azar conocido como Loto 5 de Argentina es originado y administrado por Lotería Nacional Sociedad del Estado y es una adaptación de la ruleta usada en Europa, donde un operado conocido como croupier da vueltas a dicho artefacto hasta obtener cinco números distintos que pueden ir del 0 al 36 y que determinarán los ganadores de los distintos premios  Aquí se trata también de elegir cinco números de dos cifras entre el 00 y 36 solo que el sorteo se lleva a cabo por máquinas bolilleras.  <br /><br />

         Para participar del juego se deberá elegir en un volante diseñado a tal efecto una cantidad de números y/o símbolos y/o figuras entre una serie similar previamente seleccionados que determinará la pertinente programación. Loto 5 premia la coincidencia con el sorteo de 5, 4 y 3 números apostados. Se trata de un juego poceado, y por lo tanto tiene premios cuyos valores dependen de las ventas para cada sorteo. A su vez, en el caso de que no haya un ganador en el sorteo para uno de estos premios, el mismo se acumulará para los siguientes sorteos. <br /><br />
    
         La captación de la apuesta se lleva a cabo on line, su validación es por retorno y el comprobante emitido por la máquina terminal significa la aceptación de la apuesta por el sistema. Las jugadas conocidas como “Múltiples” son ingresadas a proceso mediante terminales de computación, habilitadas en la sede de Lotería Nacional Sociedad del Estado. El pozo a distribuirse en premios se compone con el 60 por ciento de la recaudación del juego de azar menos aranceles. Los sorteos se celebran todos los viernes por la noche.  <br /><br />
    
         El Juego ofrece tres zonas de resolución diferenciadas e independientes: la Zona 1 con mecánica de resolución Siempre Sale; la Zona 2 contiene el Pozo Acumulado y 5 categorías de premios que aumentando las probabilidades de acierto; la Zona 3 denominada Bolilla Estrella, brinda la chance de reposición del cartón elevando la posibilidad de rejuego. Los resultados son publicados en el Extracto Oficial  y se exhiben en todos los locales de venta.
        </Typography>
      </Grid>
    </div>
  );
};

export default Pozo;
