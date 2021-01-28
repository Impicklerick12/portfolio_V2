import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        border: '2px solid red',
        [theme.breakpoints.down('xs')]: {
            height: 'auto',
            width: '100%',
            position: 'fixed',
            bottom: 0
        },
    }
}))

export default useStyles