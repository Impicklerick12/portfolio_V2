import react from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { siteTheme } from './styles/siteTheme'
import './styles/App.css'

import {
  Navbar,
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
    border: "2px solid black",
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse'
    },
  },
  content: {
    border: '2px solid green',
    minHeight: '100vh'
  }
}));

function App() {

  const classes = useStyles();

  return (
    <Router>
      <ThemeProvider theme={theme}>
          <Grid container className={classes.container}>
            {/* Navbar component */}
            <Navbar />

            {/* Rest of content */}
            <Grid item xs={12} sm={10} md={11} className={classes.content}>

            </Grid>
          </Grid>
      </ThemeProvider>
    </Router>
  );
}

export default App;
