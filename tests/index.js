import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from '../src/goal-management/App'

window.baseUrl = 'http://localhost';

const App = () => (
    <div>
      <MainApp/>
    </div>
)

  ReactDOM.render(
    <App />,
    document.getElementById('container')
)