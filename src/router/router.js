import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import ListBody from '../components/ListBody/ListBody'
import ListUsers from '../components/ListUsers/ListUsers'
import NotFound from '../components/NotFound/NotFound'

class MyRouter extends Component {
    render () {
        return (
            <Switch>
                <Route exact path="/" component={ListUsers}/>
                <Route exact path="/table2" component={ListBody}/>
                <Route component={NotFound}/>
            </Switch>
        )
    }
}

export default MyRouter;