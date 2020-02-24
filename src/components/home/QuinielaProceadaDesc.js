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
          Quiniela Proceada de Hoy<br /> - al instante - 
          <hr className={classes.line} />
        </Typography>
        <Typography className={classes.PozoPara}>
         El juego de la Quiniela Poceada es un juego de azar perteneciente a la  Lotería Chaqueña. La Lotería Chaqueña es la asociación que tiene a su cargo la potestad exclusiva y excluyente, de autorizar y regular el funcionamiento de los juegos de azar en la Provincia del Chaco. El edicto de creación de la Lotería asegura que 'la creación de la Lotería obedece a móviles de bien público, altos propósitos que serán compartidos por todos los diputados, debemos partir de una base saludable, el juego de la Lotería no configura un vicio en el sentido habitual de la palabra, la Lotería no se convierte en pasión, a lo más llega a convertirse en una costumbre, en la búsqueda de un número soñado o intuido'. <br /><br />

         El éxito de la Quiniela Poceada entre apostadores de la provincia ha impulsado a que la Lotería duplique sus sorteos para dicho juego. En la Quiniela Poceada el participante debe elegir cinco números de dos cifras entre el 00 y el 99. Dichos números de dos cifras deben ser distintos entre si. El costo de la apuesta es de 2 pesos. El que acierta los ocho, es acreedor al premio mayor, pero también hay premio para quienes acierten siete y seis, y hay un premio aleatorio para el que acierte las cuatro letras que figuran en la base del extracto.  <br /><br />
    
          El juego entrega en premios un total de los 48,50% de las ventas, distribuidos de la siguiente manera: primer premio recibe el 65% del pozo, segundo premio recibe el 20% del pozo, el tercer premio recibe el 5% del pozo el cuarto premio recibe el 3% del pozo. El 7% restante constituye un fondo que se acumula mientras el pozo de cinco aciertos continúe vacante.   <br /><br />
    
         En caso de producirse repeticiones en el extracto se toma en su reemplazo el número siguiendo su orden de ubicación en el extracto a fin de obtener 10 números distintos entre sí. Los sorteos se realizan los días Martes, Jueves y Sábados a las 21,00 horas.  El año anterior se agregó una chance más de ganar con la grilla de números de la Quiniela Nocturna Plus, para el mismo pozo acumulado. Recientemente un hombre se alzó con un premio acumulado de 8.399.784 de pesos.
        </Typography>
      </Grid>
    </div>
  );
};

export default Pozo;
