import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import red from '@material-ui/core/colors/red';
import { ExpandLessRounded, ExpandMore, Favorite, MoreVert, Share } from '@material-ui/icons';
import { useState } from 'react';
import clsx from 'clsx';  
//style
const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth:375,
  },
  avatar: {
    backgroundColor:red[500],
  },
  media: {
    height:0,
    paddingTop:'60%',
  },
  expand: {
    transform:'rotate(0deg)',
    marginLeft:'auto',
    transition:theme.transitions.create('transform', {
      duration:theme.transitions.duration.shortest,
    }),
  },
  expandOpen:{
    transform:'rotate(180deg)',
  },
}));

//main funciton
function CardsDemo02() {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);


// functions
const handleExpandedClick = ()=>{
  setExpanded(!expanded);
};

  return (
    <>
      <h3>Cards Demo 02 ( Complex Interaction )</h3>
      <Card className={classes.root}>
        <CardHeader
        avatar = {
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }      
        action = {
          <IconButton area-label="settings">
            <MoreVert />
          </IconButton>
        }
        title = "Shrimp and Choriz Paella(header title)"
        subheader = "Sepetember 14 2022"
        >          
        </CardHeader>
        <CardMedia
          className={classes.media}
          image="https://v4.mui.com/static/images/cards/paella.jpg"
          title="Paella dish"
        >          
        </CardMedia>
        <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton area-label="Add to Favorite">
            <Favorite />
          </IconButton>
          <IconButton area-label="share">
            <Share />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]:expanded,
            })}
            onClick={handleExpandedClick}
            aria-expanded={expanded}
            area-label="show more"
          >
            <ExpandMore />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
      </Card>
    </>
  )
}

export default CardsDemo02
