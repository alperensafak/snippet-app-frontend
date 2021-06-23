import React, {useEffect} from 'react';
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Paper, Divider, Button, Chip} from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import {fetchSingleSnippet} from "../actions/snippet"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {materialOceanic} from "react-syntax-highlighter/dist/cjs/styles/prism";


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(3),
        marginBottom: theme.spacing(8),
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
    },
    content: {
        marginTop: theme.spacing(3),
    },

    chip: {
        marginTop: theme.spacing(1),
    },
}));


const SnippetDetails = ({match, history, location}) => {
    const dispatch = useDispatch()

    const {id} = match.params;

    const currentSnippet = useSelector(state => state.snippets.currentSnippet)

    useEffect(() => {
        dispatch(fetchSingleSnippet(id))
    }, [dispatch])

    const convertRelativeTime = date =>{
        return moment(date).fromNow()
    }

    const classes = useStyles()
    return (
        <Paper className={classes.paper} elevation={0}>

            <div>
                <div className={classes.header}>
                    <Typography variant="h5" gutterBottom>
                        {currentSnippet?.name}
                    </Typography>
                    <div>
                        <Button color="primary" variant="outlined" startIcon={<EditIcon/>}>Edit</Button>
                        <Button color="secondary" variant="outlined" startIcon={<DeleteIcon/>}>Delete</Button>
                    </div>
                </div>
            </div>
            <Divider/>

            <Typography variant="overline" gutterBottom>
                {currentSnippet?.description}
            </Typography>

            <Typography variant="caption" component="p" >
                {convertRelativeTime(currentSnippet?.createdAt)}
            </Typography>

            <Chip label={`# ${currentSnippet?.language}`} variant="outline" className={classes.chip} />

            <Typography variant="body1" >
                <SyntaxHighlighter language={currentSnippet?.language} style={materialOceanic}>
                    {currentSnippet?.code}
                </SyntaxHighlighter>

            </Typography>
        </Paper>
    );
};

export default SnippetDetails;