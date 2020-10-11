import React from 'react';
import WelcomePage from '../welcome-page/welcome-page';
import PropTypes from 'prop-types';

const App = (props) => {
  return (
    <WelcomePage settings={props.settings} />
  );
};

App.propTypes = {
  settings: PropTypes.shape({
    countErrors: PropTypes.number.isRequired
  })
};

export default App;
