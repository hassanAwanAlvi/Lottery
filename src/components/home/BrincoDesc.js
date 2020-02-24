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
          El Binco de Hoy<br /> - al instante - 
          <hr className={classes.line} />
        </Typography>
        <Typography className={classes.PozoPara}>
         El Brinco es un juego de azar, común en varias jurisdicciones de la Argentina. 
	 Brinco es del tipo poceado, lo que significa que se hace un pozo de recompensas con un porcentaje de lo
         recaudado por las mismas apuestas. <br /><br />

         La forma de juego es la siguiente: el participante escoge 6 números, pudiendo ser desde el  00 y hasta el 39. El evento para sortear las cifras se hace en el fin de todas las semanas. Para llevarlo a cabo se usan máquinas bolilleras, a fin de obtener 6 bolillas aleatorias con números que corresponde al rango ya descrito. Los apostadores que ganan con tres aciertos, son recompensandos con un premio por el mismo monto que el de la apuesta original . <br /><br />
    
         Los apostadores que ganan el Primer Premio son quienes tengan números apostados que coincidan de forma completa con los números obtenidos de la máquina bolillera en el Sorteo respectivo, y ganadores del Segundo, Tercer y Cuarto Premio, quienes hayan logrado atinarle a cinco (5), cuatro (4) y tres (3) aciertos respectivamente, en el sorteo que se corresponda, no importa para fines prácticos su orden de ubicación en el Extracto Oficial ni tampoco son acumulativos. <br /><br />
    
         Los importes destinados a primer, segundo y tercer Premio serán particionados en porcentajes equivalentess entre las apuestas que logran ser ganadores de acuerdo a las indicaciones descritas previamente. En  el  supuesto  que  el  monto   destinado  para  dicho  premio  sea insuficiente para alcanzar dicho importe, la diferencia se toma directamente del Fondo de Reserva para Premios Especiales del Quini-6, y en caso que el monto destinado a dicho premio exceda el importe necesario para cubrir los mismos, el remanente se destina automáticamente al Fondo de Reserva para Premios Especiales del Quini-6. En este juego de azar, específicamente en el Primer Premio, se garantiza como mínimo un pozo de un millón de pesos argentinos ($1.000.000).
        </Typography>
      </Grid>
    </div>
  );
};

export default Pozo;
