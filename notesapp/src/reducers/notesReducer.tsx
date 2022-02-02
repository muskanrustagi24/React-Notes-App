import { Reducer } from "react";
import {addNoteAction, deleteNoteAction} from "types/actionsType";
import {notes} from "types/storeType";

const initialState: notes = [];

const notesReducer: Reducer<notes, addNoteAction | deleteNoteAction> = (state = initialState, action) => {
    switch(action.type){
        case "ADD_NOTE" :
            return [...state, action.note];
        case "DELETE_NOTE":
            return [...state.filter((note) => note !== action.note)];
        default:
            return [...state];
    }
}

export default notesReducer;