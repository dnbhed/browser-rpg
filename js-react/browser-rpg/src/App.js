import React, {Fragment} from 'react';
import './App.css';
import StartScreenContainer from './Containers/StartScreenContainer'
import NewCharacterContainer from './Containers/NewCharacterContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Fragment>
        <Route path="/" component={StartScreenContainer} />
        <Route path="/new-character" component={NewCharacterContainer} />
      </Fragment>
    </Router>
  );
}

export default App;
