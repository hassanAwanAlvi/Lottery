import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
      color: "#fff",
    },
  },
  Pozo: {
    display: "flex",
    backgroundColor: "#F3F4FE",
    justifyContent: "center",
    padding: "0 20px",
  },
  PozoHeading: {
    padding: "0.5rem 1rem",
    fontWeight: 600,
    fontFamily: "'Montserrat', sans-serif;",
    textAlign: "center",
    fontSize: "3rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  },
  line: {
    height: "0.5rem",
    width: "30%",
    color: "black",
    backgroundColor: "#fcc43e;",
    border: "none",
  },
  PozoPara: {
    margin: "30px 0",
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "500",
    fontFamily: "'Montserrat', sans-serif;",
    [theme.breakpoints.down("sm")]: {
      margin: "1rem 0",
      fontSize: "0.8rem",
    },
  },
}))

const Pozo = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid container item xs={12} className={classes.Pozo}>
        <Typography variant="h2" component="h2" className={classes.PozoHeading}>
          Quini6 de Hoy
          <br /> - al instante -
          <hr className={classes.line} />
        </Typography>
        <Typography className={classes.PozoPara}>
          La Quini 6 es un popular juego de azar perteneciente a La Lotería de
          Santa Fé. La Lotería de la Provincia de Santa Fé cuenta con una larga
          trayectoria de casi un siglo desde su fundación en 1938 por la Ley N°
          2608, con el objetivo general de impulsar un plan general de creación
          de hospitales y organización de la asistencia social. Para cumplir con
          su cometido, la ley encomienda la emisión, venta y contralor de
          Lotería de Santa Fe, y la explotación de cualquier sistema de juego
          basado en el azar oficializado en la Provincia.
          <br />
          <br />
          Quini 6, es un juego con características que van acordes a las últimas
          tendencias mundiales en apuestas. Debido a la posibilidad de obtener
          premios millonarios por poco dinero, y además tiene como aliada una
          estrategia de comercialización adecuada. De hecho, la federalización
          del Quini 6 terminó con viejos esquemas de competencia comercial,
          sustituyéndolos por la complementación de esfuerzos, lo que dio lugar
          a que hoy la Lotería de Santa Fe comercialice otros juegos. <br />
          <br />
          Por esto y otras razones Quini 6 es el juego poceado más popular del
          país. Para jugar,la persona selecciona 6 números de entre el 00 y el
          45 y participa del Sorteo Tradicional y del sorteo la segunda del
          Quini. Por un pago adicional participa del Sorteo Revancha y por otro
          del Sorteo Siempre Sale. Se asegura como mínimo un pozo para el Primer
          Premio de $ 1.500.000. <br />
          <br />
          En todos los sorteos participa con los mismos números. Los sorteos se
          llevan a cabo los días miércoles y domingos por la noche. Existe una
          recompensa adicional a repartir entre quienes logran 6 aciertos sobre
          los 18 números sorteados en los tres primeros sorteos, contándose una
          sola vez los números que pudieren repetirse. Recientemente un
          entrerriano ganó casi 30 millones de pesos en el Quini 6 cuando acertó
          los seis números de la Revancha.
        </Typography>
      </Grid>
    </div>
  )
}

export default Pozo
