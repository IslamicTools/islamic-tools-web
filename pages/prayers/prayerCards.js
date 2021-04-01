import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from '../main.module.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PrayerCard() {
  const classes = useStyles();

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
          className={classes.media}
          component="img"
          alt="Fajr"
          height="140"
          image="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          title="Fajr"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Fajr: <span id="fajr"></span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div className={styles.pad} />
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1584887546771-fe346e85c192?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=414&q=80"
          title="Dhuhr"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Dhuhr: <span id="dhuhr"></span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div className={styles.pad} />
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1610060588236-a6c254711e00?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80"
          title="Asr"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Asr: <span id="asr"></span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div className={styles.pad} />
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
          title="Maghrib"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             Maghrib: <span id="maghrib"></span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <div className={styles.pad} />
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.unsplash.com/photo-1507502707541-f369a3b18502?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          title="Isha"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Isha: <span id="isha"></span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </>
  );
}