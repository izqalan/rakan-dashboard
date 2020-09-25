import React from 'react';
import '../styles/app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
    
  );
}

export default App;
