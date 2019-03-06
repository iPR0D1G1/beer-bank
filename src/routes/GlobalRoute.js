import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { WrapperComponent } from './../views'

class GlobalRoute extends Component {
    render() {
        return (
            <Switch>
                <Route
                    path='/'
                    component={WrapperComponent}
                />
            </Switch>
        )
    }
}

export default GlobalRoute
