import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import {
    AdvancedSearchComponent,
    HomeComponent,
    FavouriteComponent,
} from './../views'

class WrapperRoutes extends Component {
    render() {
        const { url } = this.props
        console.log({ url })
        return (
            <Switch>
                <Route

                    path={`/faves`}
                    render={props => <FavouriteComponent {...props} />}
                />
                <Route

                    path={`/advanced_search`}
                    component={AdvancedSearchComponent}
                />
                <Route
                    exact
                    path={`${url}`}
                    component={HomeComponent}
                />
                <Redirect to={`${url}`} />
            </Switch>
        )
    }
}

export default WrapperRoutes
