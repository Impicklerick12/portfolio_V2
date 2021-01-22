import React from 'react'
import useStyles from '../../styles/sidebar'

import {
    Grid,
    Typography
  } from '@material-ui/core'

const Sidebar = () => {

    const classes = useStyles()

    return (
        <Grid item sm={2} className={classes.root}>
            <Typography variant="h2">Sidebar</Typography>
        </Grid>
    )
}

export default Sidebar
