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
          Loto Plus de Hoy<br /> - al instante - 
          <hr className={classes.line} />
        </Typography>
        <Typography className={classes.PozoPara}>
         El juego de azar conocido como Loto Plus, es una actividad de apuestas administrada por la Lotería de la Ciudad, Sociedad del Estado que tiene a su cargo la autorización, organización, explotación, recaudación, administración y control de los juegos de azar, destreza y apuestas mutuas, y actividades conexas en el ámbito de la Ciudad de Buenos Aires. Existen tres versiones diferentes: Tradicional, Desquite y Sale o Sale. El costo de la apuesta para la modalidad Tradicional es de 12 pesos. El costo de la apuesta para la modalidad Desquite  es 5 pesos. El coto de la apuesta para la modalidad Sale o Sale es de 3 pesos, Los tres sorteos se realizan uno tras otro, los miércoles y domingo a las 22:00 horas.  <br /><br />

         En la versión Tradicional, el participante puede seleccionar 6 números principales del 0 al 41, y otros dos números adicionales conocidos como “Jack” en un rango del 0 al 9. En el sorteo Desquite del Loto que se realiza luego de terminado el sorteo Tradicional, se sortean también 6 números principales más 2 números extra llamados Jack. El jugador participa de este sorteo con los mismos números con los que jugó en el sorteo Tradicional, y sólo tiene tres categorías de premios <br /><br />
    
         En la versión Sale o Sale se participa con los mismos números que ya se tienen. En este juego, se obtienen 6 números principales al igual que en los otros dos sorteos, pero no se extrae ningún número Jack. En su lugar, se toman como números Jacks los cuatro Jacks que ya salieron sorteados en el Tradicional y el Desquite.   <br /><br />
    
         El Loto Plus es un juego poceado lo que significa que tiene pozos generados con lo recaudado por las ventas. Los premios de Loto Plus se habilitan para su cobro al día hábil siguiente de la realización del sorteo.
        </Typography>
      </Grid>
    </div>
  );
};

export default Pozo;
