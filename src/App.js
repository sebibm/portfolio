import React from 'react';
import './styles/App.css';
import Main from './components/Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProjectoTensolitePage from './components/ProjectoTensolitePage'
import ProjectoCovidPage from './components/ProjectoCovidPage'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#53c7c7",
    },
    secondary: {
      main: "#f50057",
    },
  },
});







function App() {
  return (
    <MuiThemeProvider theme={theme}>

      <div className="App">

        <header className="App-header">
          <Router>
            <div>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/tensolite">
                  <ProjectoTensolitePage />
                </Route>
                <Route path="/covid">
                  <ProjectoCovidPage />
                </Route>
                <Route path="/">
                  <Main />
                </Route>
              </Switch>
            </div>
          </Router>
        </header>
      </div>
    </MuiThemeProvider>

  );
}

export default App;
