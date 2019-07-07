import React, {Fragment} from 'react';
import './App.css';
import StartScreenContainer from './Containers/StartScreenContainer'
import NewCharacterContainer from './Containers/NewCharacterContainer'
import PlayerSelectCharacterContainer from './Containers/PlayerSelectCharacterContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={StartScreenContainer} />
        <Route path="/new-character" component={NewCharacterContainer} />
        <Route exact path="/select-character-create-character" component={PlayerSelectCharacterContainer} />

      </Fragment>
    </Router>
  );
}

export default App;
