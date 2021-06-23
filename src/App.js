import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";
import {CssBaseline, Container, Grid, AppBar, Toolbar, Typography, Button, IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"
import PenIcon from "@material-ui/icons/Create"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import SnippetsList from "./components/SnippetsList";
import AddSnippetForm from "./components/AddSnippetForm";
import {fetchSnippets} from "./actions/snippet";
import logo from "./images/logo.svg"
import SnippetDetails from "./components/SnippetDetails";


const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,


    },

    button: {

        color: "#ffffff", // you can add your specific CSS here.
        borderRadius: "0.25rem",
        backgroundColor: "#991B1B",
        '&:hover': {
            backgroundColor: '#7F1D1D',

        },

    },
    menuButton: {
        marginRight: theme.spacing(2),

    },
    title: {
        flexGrow: 1,
        marginLeft: -24,


    },
    container: {
        marginTop: theme.spacing(3),


    },

    toolbar: {
        backgroundColor: "#EF4444",


    },

    logo: {

        maxWidth: '128px',
        maxHeight: '128px',
        minWidth: "128px",
        minHeight: "128px",

    }
}));


const App = () => {
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSnippets())
    }, [dispatch])

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const classes = useStyles();
    return (
        <>
            <CssBaseline/>
            <Container maxWidth="lg">
                <AppBar position="static" color="inherit" elevation={0}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton href="http://localhost:3000/snippets" edge="start" size="small" className={classes.container} color="inherit">
                            <img className={classes.logo} src={logo} alt="logo"/>
                        </IconButton>

                        <Typography variant="h3" color="textSecondary" className={classes.title} style={{fontWeight:"bold"}}
                                   >
                            <a href="http://localhost:3000/snippets" style={{color: "white"}}>NIPPET APP</a>
                        </Typography>

                        <Button className={classes.button}  startIcon={<PenIcon/>}
                                onClick={handleOpen}>
                            New Snippet
                        </Button>
                    </Toolbar>
                </AppBar>

                <Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <Router>
                            <Switch>
                                <Route exact path="/snippets" component={SnippetsList}/>
                                <Route exact path="/snippets/:id" component={SnippetDetails}/>
                            </Switch>

                            <Redirect from="/" to="/snippets"/>
                        </Router>
                    </Grid>
                </Grid>
            </Container>

            <AddSnippetForm open={open} handleClose={handleClose}/>
        </>
    );
};

export default App;