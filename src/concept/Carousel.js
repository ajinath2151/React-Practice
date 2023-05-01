//use nuka carousel for carousel/slider in this example
import { makeStyles } from "@material-ui/core";
import { NavigateNext } from "@material-ui/icons";
import React from "react";
import carouselImage1 from "../images/image/carousel1.png";
import carouselImage2 from "../images/image/carousel2.png";
import carouselImage3 from "../images/image/carousel3.png";
import carouselImage4 from "../images/image/carousel4.png";
import carouselImage5 from "../images/image/carousel5.png";


const useStyles = makeStyles((theme)=>({
  imageClass: {
      width: "247vh",
      height: "24rem",
      objectFit: "contain",
      objectPosition: "start",
      border: "1px solid #a2a6ac",      
      borderRadius: "2px",      
      paddingBottom:"60px",
      padding:"10px 690px 700px 20px",      
  },
  headingFive: {
    color:"#252525",
  },
  paragraph: {
    color:"#252525",
  },
  common: {
    display:"flex",
    justifyContent:"start",
    alignItems:"right",
    verticalAlign:"center",
  },
}));
function Carousel() {

  const classes = useStyles();
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className={classes.common}>
    <div className="carousel-item active">      
      <img className={classes.imageClass}  src={carouselImage1} alt="..." />
      <div className="carousel-caption d-md-block" style={{color:"black", marginLeft:"200px", fontSize:"26px",paddingLeft:"110px",paddingRight:"148px",fontWeight:300,}}>
      “I've been using Medium Rare's templates for a couple of years now and Stack is without a doubt their best work yet. It's fast, performant and absolutely stunning.”
      <h4 style={{marginTop:"20px", marginRight:"500px"}}>Lucas Nguyen</h4> 
      <p style={{fontSize:"18px", marginRight:"450px"}}>Freelance Designer</p>                                               
      </div>
    </div>
    <div className="carousel-item">
      <img src={carouselImage2} className={classes.imageClass} alt="..." />
      <div className="carousel-caption d-md-block" style={{color:"black", marginLeft:"220px", marginTop:"100px", fontSize:"26px",paddingLeft:"110px",paddingRight:"148px",fontWeight:300,}}>
      “Variant has been a massive plus for my workflow — I can now get live mockups out in a matter of hours, my clients really love it.”                                                
      <h4 style={{marginTop:"20px", marginRight:"500px"}}><h5>Rob Vasquez</h5></h4> 
      <p style={{fontSize:"18px", marginRight:"400px"}}><span>Interface Designer — Yoke</span></p>                                               
      </div>
    </div>
    <div className="carousel-item">
      <img src={carouselImage3} className={classes.imageClass} alt="..." />
      <div className="carousel-caption d-md-block" style={{color:"black", marginLeft:"200px", fontSize:"26px",paddingLeft:"110px",paddingRight:"148px",fontWeight:300,}}>
      “We’ve been using Stack to prototype designs quickly and efficiently. Needless to say we’re hugely impressed by the style and value.”                                                
      <h4 style={{marginTop:"20px", marginRight:"400px"}}>Maguerite Holland</h4> 
      <p style={{fontSize:"18px", marginRight:"400px"}}>Interface Designer — Yoke
      </p>                                               
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
}

export default Carousel;
