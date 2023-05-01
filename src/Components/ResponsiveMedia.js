import { Grid } from '@material-ui/core'
import React from 'react'

export default function ResponsiveMedia() {
  return (
    <>
      <Grid lg={12} item container spacing={2}>
        
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <h1 style={{backgroundColor:'green'}}>Block 1</h1>
        </Grid>
        
        
        
        
        <Grid item lg={3} md={4} sm={6} xs={12}><h1 style={{backgroundColor:'green'}}>Block 2</h1></Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}><h1 style={{backgroundColor:'green'}}>Block 3</h1></Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}><h1 style={{backgroundColor:'green'}}>Block 4</h1></Grid>
      </Grid>      
    </>
  );
}

