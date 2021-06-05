import { Container, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router';
import Footer from './Main/Footer';
import Header from './Main/Header';
import Contact from './Pages/Contact/Contacts';
import Departments from './Pages/Departments/Departments';
import NotFound from './Pages/Error/NotFound';
import Home from './Pages/Home/Home';
import IPBC from './Pages/IPBC/IPBC';
import Messages from './Pages/Messages/Messages';
import Pastoral from './Pages/Pastoral/Pastoral';

const useStyles = makeStyles(theme => ({
  root: {},
  mainContainer: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    }
  }
}));

function App() {
  const classes = useStyles();
  const theme = useTheme();
  console.log(theme);

  return (
    <>
      <Container fixed maxWidth="lg">
        <Header />
      </Container>
      <Container fixed maxWidth="lg" className={ classes.mainContainer }>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/ipbc" component={ IPBC } />
          <Route exact path="/messages" component={ Messages } />
          <Route exact path="/pastoral" component={ Pastoral } />
          <Route exact path="/departments" component={ Departments } />
          <Route exact path="/contact" component={ Contact } />
          <Route path="" component={ NotFound } />
        </Switch>
      </Container>
      <Footer />
    </>
  );
}

export default App;
