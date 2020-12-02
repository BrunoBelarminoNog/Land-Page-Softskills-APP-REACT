import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition} from 'react-transition-group'

import Index from './pages/Landing';
import Referencias from './pages/Reference';


function Routes() {

    const location = useLocation();

    return (
        <SwitchTransition mode='out-in'>
            <CSSTransition key={location.pathname} classNames="transition" timeout={300} >
                <Switch location={location} >
                    <Route path="/" exact component={Index}/>
                    <Route path="/referencias" exact component={Referencias} />
                </Switch>
            </CSSTransition>
        </SwitchTransition>
    )
}


export default Routes;