import * as types from "./types"
import * as api from "../api/index"
import {FETCH_SINGLE_SNIPPET} from "./types";


//action creators are not async. Redux-thunk is for async operations in action creators.

export const fetchSnippets = () => async (dispatch) => { //action create
    // return {              //THIS IS NOT ASYNC
    //     type: types.FETCH_SNIPPETS,
    //     payload: []
    // }

    try {
        const {data} = await api.fetchSnippets()
        dispatch({                          //REDUX-THUNK. action dispatch, data is response
            type: types.FETCH_SNIPPETS,
            payload: data //data that come from api
        })
    } catch (error) {
        console.log(error)
    }

}


export const fetchSingleSnippet = (id) => async (dispatch) => {

    try {
        const {data} = await api.fetchSingleSnippet(id)
        dispatch({
            type: types.FETCH_SINGLE_SNIPPET,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }

}





// export const createSnippet = () =>{   //THIS IS NOT ASYNC. ONLY ACTION CREATE
//     return {
//         type: types.CREATE_SNIPPET,
//         payload:snippet
//     }
// }


//REDUX-THUNK. DISPATCH ACTION
export const createSnippet = (snippet) => async (dispatch) => {
    try {
        const {data} = await api.createSnippet(snippet)

        dispatch({
            type: types.CREATE_SNIPPET,
            payload: data

        })
    } catch (error) {
        console.log(error)
    }
}


export const updateSnippet = (id, snippet) => async (dispatch) => {
    try {
        const {data} = await api.updateSnippet(id,snippet)

        dispatch({
            type: types.UPDATE_SNIPPET,
            payload: data

        })
    } catch (error) {
        console.log(error)
    }
}



export const deleteSnippet = (id) => async (dispatch) => {
    try {
        const {data} = await api.deleteSnippet(id)

        dispatch({
            type: types.DELETE_SNIPPET,
            payload: data._id

        })
    } catch (error) {
        console.log(error)
    }
}
