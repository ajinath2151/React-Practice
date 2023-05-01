import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  bullet: {
    // display:'inline-block',
    // margin:'0 2',
    // transform:'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
}));

function CardsDemo() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>. </span>;
  return (
    <>
      <h3>Cards Demo</h3>
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              word of the day
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              This{bull}Is{bull}Main{bull}Heading
              {/* This. Is. Main. Heading */}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Adjective
            </Typography>
            <Typography variant="body2" component="p">
              well meaning and kindly
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="samll">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
}

export default CardsDemo;
