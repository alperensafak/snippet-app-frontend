import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles"
import {useSelector} from "react-redux";
import {Grid, Button} from "@material-ui/core"
import Snippet from "./Snippet"
import gridRows from "../images/rows.svg"
import gridThree from "../images/three_grid.svg"

const useStyles = makeStyles((theme) => ({
    layoutShifter: {
        float: "right",
        margin: theme.spacing(2)
    },
    layoutButton: {
        maxWidth: '48px',
        maxHeight: '48px',
        minWidth:"48px",
        minHeight:"48px",
    }
}))

const SnippetsList = () => {

    const snippets = useSelector(state => state.snippets.snippets)

    const [layout, setLayout] = useState("gridRows")

    const calculateMd = () => {
        return layout === "gridRows" ? 12 : 4;
    }

    const classes = useStyles();

    return (
        <>
            <div className={classes.layoutShifter}>
                <Button variant="text" className={classes.layoutButton} onClick={() => setLayout("gridRows")}>
                    <img src={gridRows} alt="rows" style={{background: layout === "gridRows" ? "#7F1D1D" : "",filter: "invert(3)"}}/>
                </Button>

                <Button variant="text" className={classes.layoutButton} onClick={() => setLayout("gridThree")} >
                    <img src={gridThree} alt="three columns" style={{background: layout === "gridThree" ? "#7F1D1D" : "",filter: "invert(1)"}}/>
                </Button>
            </div>


            <Grid container spacing={2}  alignContent="stretch">
                {snippets.length > 0 &&
                snippets.map((snippet) => (
                    <Grid item key={snippet?._id} xs={calculateMd()} >

                        <Snippet {...snippet}/>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default SnippetsList;