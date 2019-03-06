import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import store from './store'
import App from './App'
import theme from "./styles/js/Theme"
import { MuiThemeProvider } from "@material-ui/core"
import * as serviceWorker from './serviceWorker'
import "./styles/css/main.scss"
import 'typeface-roboto'
import { BrowserRouter } from 'react-router-dom'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';

ReactDOM.render(
  <BrowserRouter
    basename={`/`}
  >
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiThemeProvider theme={theme}>
        <ReduxProvider store={store} >
          <App />
        </ReduxProvider>
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  </BrowserRouter>
  , document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
