// use to display multiple images in a group
// child component imageListItem
//properties , varient, cols, gap
import { Box, ImageList, ImageListItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import Img1 from "./images/img1.jpg";
import Img2 from "./images/img2.jpg";
import Img3 from "./images/img3.jpg";
import Img4 from "./images/img4.jpg";
import Img5 from "./images/img5.jpg";
import Img6 from "./images/img6.jpg";
import Img7 from "./images/img7.jpg";
import Img8 from "./images/img8.jpg";
import Img9 from "./images/img9.jpg";
import Img10 from "./images/img10.jpg";
import Img11 from "./images/img11.jpg";
import Img12 from "./images/img12.jpg";
import './Gallery.css';
const itemData = [
  {
    id:1,
    imgSrc: Img1,
    title: 'Breakfast',
  },
  {
    id:2,
    imgSrc: Img2,
    title: 'Breakfast',
  },
  {
    id:3,
    imgSrc: Img3,
    title: 'Breakfast',
  },
  {
    id:4,
    imgSrc: Img4,
    title: 'Breakfast',
  },
  {
    id:5,
    imgSrc: Img5,
    title: 'Breakfast',
  },
  {
    id:6,
    imgSrc: Img6,
    title: 'Breakfast',
  },
  {
    id:7,
    imgSrc: Img7,
    title: 'Breakfast',
  },
  {
    id:8,
    imgSrc: Img8,
    title: 'Breakfast',
  },
  {
    id:9,
    imgSrc: Img9,
    title: 'Breakfast',
  },
  {
    id:10,
    imgSrc: Img10,
    title: 'Breakfast',
  },
  {
    id:11,
    imgSrc: Img11,
    title: 'Breakfast',
  },
  {
    id:12,
    imgSrc: Img12,
    title: 'Breakfast',
  },  
];

const useStyle = makeStyles((theme) => {});


function ImageListDemo() {
  const classes = useStyle();
  return (
   <>
   <div className="gallery">

     {/* console.warn(itemData) */}
    
    {itemData.map((item,index)=>{
        return (
            <div className="pics" key={index}>
                <img  src={item.imgSrc} style={{width:'100%'}} />
            </div>
        )
    })}

   </div>
   </> 
  );
}

export default ImageListDemo;
