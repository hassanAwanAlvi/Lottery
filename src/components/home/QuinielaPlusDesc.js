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
          Quiniela Plus de Hoy<br /> - al instante - 
          <hr className={classes.line} />
        </Typography>
        <Typography className={classes.PozoPara}>
         La Quiniela Plus es un juego de azar desarrollado en Argentina, de tipo poceado, lo que significa que se hace un pozo de recompensas con un porcentaje de lo recaudado por las mismas apuestas, este juego pertenece a la Lotería de la Provincia de Buenos Aires, y es un sorteo procedente de la Quiniela normal. Quiniela Plus se abrió al público comercial a fines del año 2004, por lo que tiene más de 15 años en el gusto de los Argentinos. <br /><br />

         Este juego se lleva a cabo a la par que la Quiniela nocturna, todas las noches lunes a sábado. Su costo está fijado en 15 pesos argentinos, y por dicho precio se le concede a la persona el participar en sus tres versiones: Quiniela Plus, Quiniela Super Plus y Chance Plus. En la versión original el pozo mínimo asciende a $1.200.000, pero también, reciben recompensas aquellos que coincidan en siete, seis y cinco números de las dos últimas cifras de los 20 lugares que forman parte del extracto dela Quiniela nocturna. <br /><br />
    
         Para la Quiniela Super Plus, se usan como números sorteados las dos primeras cifras (unidad de mil y centena) de la Quiniela nocturna y gana quien que haya obtenido mayor cantidad de aciertos. La Chance Plus tiene un pozo mínimo asegurado de ochocientos mil pesos ($800.000) para quien acierte sus 8 números. Además, obtienen premio fijo quienes acierten siete, seis y cinco números. Se toman como números sorteados la dos cifras del medio (la centena y la decena). Desde el año pasado se aumentó el Pozo Mínimo Asegurado de la variante Quiniela Plus, Totalizando entre las tres variantes un pozo mínimo asegurado de ($2.000.000). Por otro lado, se informa el monto obligatorio a pagar en agencias, relativo a los premios de Quiniela Plus y sus Variantes, se elevó a pesos cien mil ($100.000).<br /><br />
    
         En la Argentina hay una fuerte tradición vinculada con los juegos masivos de azar, como las tradicionales quinielas, que tienen presencia en la mayoría de las provincias y en la que para ganar se necesita acertar un número de dos, tres o cuatro cifras como es el caso de esta la Super Plus, en la cual a principios de este año un hombre ganó más de 13 millones de pesos.
        </Typography>
      </Grid>
    </div>
  );
};

export default Pozo;
