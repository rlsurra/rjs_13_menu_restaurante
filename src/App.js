import React from 'react';
import Header from './components/Header';
import Productos from './components/Productos';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Productos}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
