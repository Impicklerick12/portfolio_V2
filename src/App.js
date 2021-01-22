import react from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { siteTheme } from './styles/siteTheme'

import {
  Sidebar,
} from './Exports'

import { 
  makeStyles,
  ThemeProvider,
  createMuiTheme
} from '@material-ui/core/styles';

import { Container, Grid } from '@material-ui/core'

// create custom a custom theme
let theme = createMuiTheme(siteTheme);

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    border: "2px solid black"
  },
  content: {
    border: '2px solid green'
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Router>
        <ThemeProvider theme={theme}>
          <Grid container>
            {/* Sidebar component */}
            <Sidebar />

            {/* Rest of content */}
            <Grid item sm={10} className={classes.content}>

            </Grid>
          </Grid>
        </ThemeProvider>
      </Router>
    </div>
  );
}

export default App;
