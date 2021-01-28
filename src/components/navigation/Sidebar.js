import React from 'react'
import useStyles from '../../styles/sidebar'
import MobileBottomNav from './MobileBottomNav'

import {
    Grid,
    Typography,
    useMediaQuery
} from '@material-ui/core'

import { useTheme } from "@material-ui/core/styles"

const Sidebar = () => {

    const classes = useStyles()

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

    return (
        <Grid item xs={12} sm={2} md={1} className={classes.root}>
            { isMobile ? (
                <MobileBottomNav />
            ) : (
                <Typography variant="h2">Desktop</Typography>
            )}
        </Grid>
    )
}

export default Sidebar
