import * as types from "../actions/types";

const initialState = {
    snippets: [],
    currentSnippet: null
}
const snippetReducer = (state=initialState,action) =>{
    switch(action.type) {
        case types.FETCH_SNIPPETS:
            return{
                ...state,
                snippets:action.payload
            };
        case types.FETCH_SINGLE_SNIPPET:
            return{
                ...state,
               currentSnippet: action.payload,
            };
        case types.CREATE_SNIPPET:
            return{
                ...state,
                snippets:[...state.snippets, action.payload]
            };
            case types.UPDATE_SNIPPET:
            return{
               ...state,
                snippets:state.snippets.map(snippet=>{
                    if(snippet._id===action.payload._id){
                        return action.payload
                    }else{
                        return snippet
                    }
                }),
                currentSnippet: action.payload,
            };
        case types.DELETE_SNIPPET:
            return{
                ...state,
                snippets:state.snippets.filter(snippet=>snippet._id!==action.payload),
                currentSnippet: null
            }
        default:
            return {
                ...state
            }
    }
}

export default snippetReducer