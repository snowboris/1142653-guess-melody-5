import React from 'react';
import WelcomePage from '../welcome-page/welcome-page';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import Result from '../result/result';
import Lose from '../lose/lose';
import DevArtist from '../dev-artist/dev-artist';
import DevGenre from '../dev-genre/dev-genre';

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <WelcomePage settings={props.settings} />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/result' >
          <Result />
        </Route>
        <Route path='/lose' >
          <Lose />
        </Route>
        <Route path='/dev-artist' >
          <DevArtist />
        </Route>
        <Route path='/dev-genre' >
          <DevGenre />
        </Route>
      </Switch>
    </BrowserRouter>

  );
};

App.propTypes = {
  settings: PropTypes.shape({
    countErrors: PropTypes.number.isRequired
  })
};

export default App;
