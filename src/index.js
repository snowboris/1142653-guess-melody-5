import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const settings = {
  countErrors: 3
};

ReactDOM.render(<App settings={settings} />, document.getElementById(`root`));
