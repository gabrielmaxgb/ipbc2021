import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react'

function Home() {
  return (
    <>
      <Grid container xs>
        <Grid item container xs={12} sm={4} fluid justify="center" style={{ backgroundColor: 'green' }}>
          1
        </Grid>
        <Grid item container xs={12} sm={8} justify="center" style={{ backgroundColor: 'pink' }}>
          2
        </Grid>
      </Grid>
      <Grid container xs justify="center" style={{ backgroundColor: 'aqua' }}>
        3
      </Grid>
    </>
  )
}

export default Home;
