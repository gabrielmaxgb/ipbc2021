import { Box, Container } from '@material-ui/core'
import React from 'react'

function Footer() {
  return (
    <Box
      style={{
        position: 'fixed',
        bottom: 0,
        border: '1px solid red',
        backgroundColor: 'aqua',
        width: '100vw',
      }}
    >
      <Container fixed maxWidth="lg">
        footer
      </Container>
    </Box>
  )
}

export default Footer;
