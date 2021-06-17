import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header'
import ActionSection from './components/ActionSection';
import NewSub from './components/NewSub';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      
      <Switch>
        <Route path="/new-sub">
          <NewSub />
        </Route>

        <Route path="/">
        <ActionSection />

        </Route>
      </Switch>
      

      </Router>
      
      
    </div>
  );
}

export default App;
