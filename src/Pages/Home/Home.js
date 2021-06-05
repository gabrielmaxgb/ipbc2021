import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react'

function Home() {
  return (
    <>
      <Grid container xs>
        <Grid item container xs={3} fluid justify="center">
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#D7DE87',
              padding: '2rem',
              borderRadius: '10px'
            }}
          >
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </Box>
        </Grid>
        <Grid item container xs={9} justify="center" style={{ backgroundColor: 'pink' }}>
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
