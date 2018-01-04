import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from '../src/goal-management/App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

window.baseUrl = 'http://localhost';



const App = () => (
  <MuiThemeProvider>
    <MainApp />
  </MuiThemeProvider>
)

ReactDOM.render(
  <App />,
  document.getElementById('container')
)