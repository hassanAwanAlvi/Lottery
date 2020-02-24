import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { useEffect, useState } from "react"
import { DateTime, Interval } from "luxon"
import { Dot } from "react-animated-dots"

const useStyles = makeStyles(theme => ({
  liveStreamContainer: {
    backgroundColor: "#e3003b",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.3rem",
    [theme.breakpoints.down("sm")]: {
      padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.2rem",
    },
  },
  liveStreamh3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontWeight: 600,
    fontSize: "1.5rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  liveStreamImgContainer: {
    margin: "0.1rem 0.5rem",
    width: 42,
    height: 29,
    [theme.breakpoints.down("xs")]: {
      width: 30,
      height: 20,
    },
  },
  nextDrawContainer: {
    backgroundColor: "#262d31",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.1rem",
    [theme.breakpoints.down("xs")]: {
      padding: ".2rem",
    },
  },
  nextDrawLoader: {
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    border: "6px solid white",
    marginRight: "10px",
    borderTopColor: "#fcc43e",
    transform: "rotate(45deg)",
  },
  nextDrawtimer: {
    fontSize: "2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
  nextDrawh3: {
    // padding: "0.5rem 1rem",
    fontSize: "1.3rem",
    color: "#ffffff",
    fontFamily: "'Montserrat', sans-serif;",
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem",
      textAlign: "left",
      margin: 0,
      padding: 0,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8rem",
    },
  },
}))

export const useTime = (refreshCycle = 1000) => {
  const [now, setNow] = useState(getTime())

  useEffect(() => {
    const intervalId = setInterval(() => setNow(getTime()), refreshCycle)

    return () => clearInterval(intervalId)
  }, [refreshCycle, setInterval, clearInterval, setNow, getTime])

  return now
}

export const getTime = () => {
  return DateTime.local().setZone("America/Argentina/Buenos_Aires")
}

const getNextDrawTime = () => {
  const dateToday = getTime().day
  const dateTommorow = getTime().plus({ days: 1 }).day
  return [
    [
      ["00", "00", dateToday],
      ["11", "30", dateToday],
    ],
    [
      ["12", "30", dateToday],
      ["14", "00", dateToday],
    ],
    [
      ["15", "00", dateToday],
      ["17", "30", dateToday],
    ],
    [
      ["18", "30", dateToday],
      ["21", "00", dateToday],
    ],
    [
      ["22", "00", dateToday],
      ["22", "30", dateToday],
    ],
    [
      ["23", "00", dateToday],
      ["11", "30", dateTommorow],
    ],
  ]
}

export const Countdown = ({ end, classes }) => {
  const now = useTime()
  const diff = end.diff(now, ["days", "hours", "minutes"])
  return (
    <Typography variant="h4" component="h2" className={classes.nextDrawh3}>
      Próximo sorteo: <span className={classes.nextDrawtimer}>{diff.days}</span>{" "}
      día <span className={classes.nextDrawtimer}>{diff.hours}</span> horas{" "}
      <span className={classes.nextDrawtimer}>{parseInt(diff.minutes)}</span>{" "}
      minutos
    </Typography>
  )
}

const Livestream = () => {
  let isLiveStream = true
  let conterEndTime = null

  const drawList = getNextDrawTime()
  drawList.forEach(times => {
    const [start, end] = times
    const startDate = DateTime.fromObject({
      hour: start[0],
      minute: start[1],
      day: start[2],
      zone: "America/Argentina/Buenos_Aires",
    })
    const endDate = DateTime.fromObject({
      hour: end[0],
      minute: end[1],
      day: end[2],
      zone: "America/Argentina/Buenos_Aires",
    })

    const interval = Interval.fromDateTimes(startDate, endDate)
    if (interval.contains(getTime())) {
      isLiveStream = false
      conterEndTime = endDate
    }
  })

  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      liveIcon: file(relativePath: { eq: "live_icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return isLiveStream ? (
    <div className={classes.liveStreamContainer}>
      <div className={classes.liveStreamImgContainer}>
        <Img
          fluid={data.liveIcon.childImageSharp.fluid}
          fadeIn={false}
          alt="Sorteando"
        />
      </div>
      <Typography variant="h2" component="h2" className={classes.liveStreamh3}>
        Sorteando - en vivo
        <Dot>.</Dot>
        <Dot>.</Dot>
        <Dot>.</Dot>
      </Typography>
    </div>
  ) : (
    <div className={classes.nextDrawContainer}>
      <div className={classes.nextDrawLoader}></div>
      <Countdown classes={classes} end={conterEndTime} />
    </div>
  )
}

export default Livestream
