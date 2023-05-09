import React from 'react'
import Carousel from 'carousel-react-rcdev'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    carausel: {
        height:"200px",
        width:"1200px",
    },
    item:{
        width:"400px",
        height:"200px",
    }
}));

function CarouselOrSlider() {

    const classes = useStyles();
  return (
    <div className={classes.carausel}>

    <Carousel max_width={1000}>
        <img src='https://www.afternoonvoice.com/wp-content/uploads/2022/07/Sambhaji-Nagar-Chowk.jpg' alt='imagem' title='imagem'   className={classes.item}/>
        <img className={classes.item} src='https://img.freepik.com/premium-vector/chhatrapati-sambhaji-nagar-is-written-marathi-text-with-hindu-flag-maharashtra-city-name_302321-2453.jpg?w=2000' alt='imagem' title='imagem' />
        <img className={classes.item} src='https://feeds.abplive.com/onecms/images/uploaded-images/2023/03/25/f7d7d0c80603fde44e5ca0e6fc0d28911679716757308443_original.jpg?impolicy=abp_cdn&imwidth=650' alt='imagem' title='imagem' />
        <img src='https://www.afternoonvoice.com/wp-content/uploads/2022/07/Sambhaji-Nagar-Chowk.jpg' alt='imagem' title='imagem'   className={classes.item}/>
        <img className={classes.item} src='https://img.freepik.com/premium-vector/chhatrapati-sambhaji-nagar-is-written-marathi-text-with-hindu-flag-maharashtra-city-name_302321-2453.jpg?w=2000' alt='imagem' title='imagem' />
        <img className={classes.item} src='https://feeds.abplive.com/onecms/images/uploaded-images/2023/03/25/f7d7d0c80603fde44e5ca0e6fc0d28911679716757308443_original.jpg?impolicy=abp_cdn&imwidth=650' alt='imagem' title='imagem' />
        <img src='https://www.afternoonvoice.com/wp-content/uploads/2022/07/Sambhaji-Nagar-Chowk.jpg' alt='imagem' title='imagem'   className={classes.item}/>
        <img className={classes.item} src='https://img.freepik.com/premium-vector/chhatrapati-sambhaji-nagar-is-written-marathi-text-with-hindu-flag-maharashtra-city-name_302321-2453.jpg?w=2000' alt='imagem' title='imagem' />
        <img className={classes.item} src='https://feeds.abplive.com/onecms/images/uploaded-images/2023/03/25/f7d7d0c80603fde44e5ca0e6fc0d28911679716757308443_original.jpg?impolicy=abp_cdn&imwidth=650' alt='imagem' title='imagem' />
        <img src='https://www.afternoonvoice.com/wp-content/uploads/2022/07/Sambhaji-Nagar-Chowk.jpg' alt='imagem' title='imagem'   className={classes.item}/>
        <img className={classes.item} src='https://img.freepik.com/premium-vector/chhatrapati-sambhaji-nagar-is-written-marathi-text-with-hindu-flag-maharashtra-city-name_302321-2453.jpg?w=2000' alt='imagem' title='imagem' />
        <img className={classes.item} src='https://feeds.abplive.com/onecms/images/uploaded-images/2023/03/25/f7d7d0c80603fde44e5ca0e6fc0d28911679716757308443_original.jpg?impolicy=abp_cdn&imwidth=650' alt='imagem' title='imagem' />
        
    </Carousel>
    </div>
  )
}

export default CarouselOrSlider
