import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./store";
import "./index.css";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import {MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";


const themeDark = createMuiTheme({
    palette: {

        background: {
            default: "#EF4444",
        },
    },
});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={themeDark}>
            <CssBaseline/>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById("root")
);


