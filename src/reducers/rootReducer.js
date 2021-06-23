import {combineReducers} from "redux";
import snippetReducer from "./snippet"
//import authReducer

const rootReducer = combineReducers({
    snippets: snippetReducer //state.snippets
    //auth:authReducer
})

export default rootReducer