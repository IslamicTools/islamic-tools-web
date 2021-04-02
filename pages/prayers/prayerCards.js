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
  
  <div>
    <Card className={classes.root}>
      <CardActionArea>
      <CardMedia
          className={classes.media}
          component='img'
          alt="Fajr"
          height="140"
          image="/img/fajr-dawn.webp"
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
          image="/img/dhuhr-noon.webp"
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
          image="/img/asr-afternoon.webp"
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
          image="/img/maghrib-sunset.webp"
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
          image="/img/isha-night.webp"
          title="Isha"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Isha: <span id="isha"></span>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}