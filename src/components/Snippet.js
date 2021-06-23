import React, {useState} from 'react';
import moment from "moment";
import {Link} from "react-router-dom"
import {makeStyles} from "@material-ui/core/styles"
import {
    Card,
    Chip,
    Button,
    CardMedia,
    CardContent,
    CardActions,
    Typography
} from "@material-ui/core"
import {useDispatch, useSelector} from "react-redux";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialOceanic} from 'react-syntax-highlighter/dist/esm/styles/prism';
import PenIcon from "@material-ui/icons/Create";
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import {deleteSnippet} from "../actions/snippet";
import EditSnippetForm from "./EditSnippetForm";



const useStyles = makeStyles((theme) => ({
    root: {

        position: "relative",
        marginBottom: "48px",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",


    },


    overlay: {
        marginTop: theme.spacing(1),
        position: "absolute",
        right: "20px",
        fontWeight: "bold",
        color: "#7F1D1D",
    },
    chip: {

        position: "absolute",
        top: "16px",
        right: "20px",
        color: "#7F1D1D",
        fontWeight: "bold",
    },

    button: {


        borderRadius: "0.25rem",
        backgroundColor: "#991B1B",
        '&:hover': {
            backgroundColor: '#7F1D1D',

        },
        marginTop: "-18px",
        marginLeft: "8px"
    }
}));

const Snippet = ({_id, name, language, description, code, createdAt}) => {
    const dispatch = useDispatch()

    const snippetData = {_id, name, language, description, code}

    const [editMode, setEditMode] = useState(false)

    const openEditMode = () => {
        setEditMode(true)
    }

    const closeEditMode = () => {
        setEditMode(false)
    }

    const convertRelativeTime = date => {
        return moment(date).fromNow()

    }

    const removeSnippet = () => {
        dispatch(deleteSnippet(_id))
    }
    const classes = useStyles()

    return (
        <Card className={classes.root}>

            {
                editMode ? (
                    <EditSnippetForm snippetData={snippetData} closeEditMode={closeEditMode}/>
                ):(
                    <div>
                        <Chip label={`# ${language}`} variant="outline" className={classes.chip}/>


                        <CardContent>
                            <Typography variant="h6" component="p" gutterBottom>
                                {name}
                            </Typography>
                            <Typography variant="body2" component="p" gutterBottom>
                                {description}
                            </Typography>

                            <Typography variant="body2" component="p" gutterBottom>
                                <SyntaxHighlighter language={language} style={materialOceanic}>
                                    {code}
                                </SyntaxHighlighter>

                            </Typography>
                            <div className={classes.overlay}>

                                <Typography variant="body2">
                                    {convertRelativeTime(createdAt)}
                                </Typography>
                            </div>
                        </CardContent>

                        <CardActions>

                            <Button className={classes.button} style={{color: "#ffffff", width: "108px"}}
                                    startIcon={<EditIcon style={{color: "white"}}/>} onClick={openEditMode}
                            >


                                EDIT

                            </Button>

                            <Button className={classes.button} style={{color: "#ffffff", width: "108px"}}
                                    startIcon={<DeleteIcon style={{color: "white"}}/>} onClick={removeSnippet}
                            >
                                DELETE

                            </Button>
                        </CardActions>
                    </div>
                )
            }



        </Card>
    );
};

export default Snippet;