import React, {Fragment} from 'react';
import './App.css';
import StartScreenContainer from './Containers/StartScreenContainer'
import NewCharacterContainer from './Containers/NewCharacterContainer'
import NewPlayerContainer from './Containers/NewPlayerContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={StartScreenContainer} />
        <Route exact path="/new-character" component={NewCharacterContainer} />
        <Route exact path="/player" component=
        {NewPlayerContainer} />
      </Fragment>
    </Router>
  );
}

export default App;
