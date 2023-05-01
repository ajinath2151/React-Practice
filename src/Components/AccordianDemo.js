import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "60%",
  },
  heading: {
    fontSize:theme.typography.pxToRem(24),
    fontWeight:theme.typography.fontWeightBold,
  }
}));

function AccordianDemo() {
  const classes = useStyles();
  return (
    <>
      <h3>Accprdoam Demo</h3>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            area-contrls="panella-content"
            id="pannela-header"
          >
            <Typography className={classes.heading}>Accordian 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              dolores facere quam, voluptas eveniet exercitationem velit tempora
              fugit dicta, quo in neque explicabo molestiae impedit.
              Consequuntur eius libero animi dolorum ut voluptate neque
              blanditiis! Dolor culpa porro atque, vel veritatis maxime. A
              necessitatibus tempore inventore ex iste magnam ducimus quaerat!
            </Typography>
          </AccordionDetails>          
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            area-contrls="panella-content"
            id="pannela-header"
          >
            <Typography className={classes.heading}>Accordian 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              2 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              dolores facere quam, voluptas eveniet exercitationem velit tempora
              fugit dicta, quo in neque explicabo molestiae impedit.
              Consequuntur eius libero animi dolorum ut voluptate neque
              blanditiis! Dolor culpa porro atque, vel veritatis maxime. A
              necessitatibus tempore inventore ex iste magnam ducimus quaerat!
            </Typography>
          </AccordionDetails>          
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            area-contrls="panella-content"
            id="pannela-header"
          >
            <Typography className={classes.heading}>Accordian 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              dolores facere quam, voluptas eveniet exercitationem velit tempora
              fugit dicta, quo in neque explicabo molestiae impedit.
              Consequuntur eius libero animi dolorum ut voluptate neque
              blanditiis! Dolor culpa porro atque, vel veritatis maxime. A
              necessitatibus tempore inventore ex iste magnam ducimus quaerat!
            </Typography>
          </AccordionDetails>          
        </Accordion>
        <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            area-contrls="panella-content"
            id="pannela-header"
          >
            <Typography className={classes.heading}>Accordian 4</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2">
              4 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              dolores facere quam, voluptas eveniet exercitationem velit tempora
              fugit dicta, quo in neque explicabo molestiae impedit.
              Consequuntur eius libero animi dolorum ut voluptate neque
              blanditiis! Dolor culpa porro atque, vel veritatis maxime. A
              necessitatibus tempore inventore ex iste magnam ducimus quaerat!
            </Typography>
          </AccordionDetails>          
        </Accordion>
      </div>
    </>
  );
}

export default AccordianDemo;
