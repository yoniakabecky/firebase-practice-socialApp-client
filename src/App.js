import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

// Components
import Navbar from './components/Navbar';

// Pages
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ff784e',
      main: '#ff5722',
      dark: '#b23c17',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f73378',
      main: '#f50057',
      dark: '#ab003c',
      contrastText: '#fff',
    },
  },
  // typography: {
  //   useNextVariants: true
  // }
})

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path='/' component={home} />
                <Route exact path='/signup' component={signup} />
                <Route exact path='/login' component={login} />
              </Switch>
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
