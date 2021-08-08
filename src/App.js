import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Home } from './pages'
import { Header, Footer } from './components';
const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/pokedex">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
