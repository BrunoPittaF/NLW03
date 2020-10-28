import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import OrphanagesMap from './Pages/OrphanagesMap';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
    <Switch> 
    <Route path="/" exact component={ Home } />
    <Route path="/app" component={ OrphanagesMap }/>
    </Switch>
    </BrowserRouter>
    );
}

export default Routes;