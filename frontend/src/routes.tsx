import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Orphanage from './Pages/Orphanage/Orphanage';
import CreateOrphanage from './Pages/CreateOrphanage/CreateOrphanage';
import OrphanagesMap from './Pages/OrphanagesMap';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
    <Switch> 
    <Route path="/" exact component={ Home } />
    <Route path="/app" component={ OrphanagesMap }/>

    <Route path="/orphanages/create" component= { CreateOrphanage } /> 
    <Route path="/orphanages/:id" component={ Orphanage } />
        
    </Switch>
    </BrowserRouter>
    );
}

export default Routes;