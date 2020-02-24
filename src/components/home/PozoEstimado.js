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
          La Quiniela de Hoy<br /> - al instante - 
          <hr className={classes.line} />
        </Typography>
        <Typography className={classes.PozoPara}>
         La Quiniela es un juego de azar muy común en Argentina, de hecho el más famoso y de mayor arrastre. 
         Dicho juego está bajo el control de la Loterías de cada una de las Provincias del país. 
         En la mayoría de los casos la jurisdicción de cada Provincia establece el llamado "tope de banca". <br /><br />

         La quiniela se compone de un grupo de 20 números de 4 cifras, que van desde unidades a unidades de millar, 
         los números corresponden a 20 recompensas, una por cada uno. Los números se definen usando cinco máquinas 
         bolilleras de tipo manual o automatizado La primer bola da lugar a la unidad de millar de la cifra, 
         la bola siguiente a la centena, y así sucesivamente hasta el extracto. <br /><br />
    
         Las quinielas más famosas son las que se efectúan en las jurisdicciones más importantes de la Nación, 
         desde luego en la zona metropolitana: Ciudad de Buenos Aires, y el Gran Buenos Aires. 
         Un detalle importante es que en la Ciudad y GBA se trabaja en forma de sorteo de letras, lo cual significa que a cada apostador
         se les dan aleatoriamente 4 letras y son las 4 letras las que participan en la quiniela. <br /><br />
    
         El nivel económico de la recompensa en juego se decide en la programación de los organizadores. 
         Otras que también revisten importante relevancia son las que se llevan a cabo en las jurisdicciones de: 
         Provincia de Entre Ríos y Provincia de Santa Fe. 
        </Typography>
      </Grid>
    </div>
  );
};

export default Pozo;
