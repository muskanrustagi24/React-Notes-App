import { Reducer } from "react";
import {
  addNoteAction,
  editNoteAction,
  deleteNoteAction,
} from "types/actionsType";
import { notes } from "types/storeType";

const initialState: notes = [];

const notesReducer: Reducer<
  notes,
  addNoteAction | editNoteAction | deleteNoteAction
> = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return [...state, action.note];
    case "EDIT_NOTE":
      return state.map((note) =>
        note === action.note ? action.note : note
      );
    case "DELETE_NOTE":
      return [...state.filter((note) => note !== action.note)];
    default:
      return [...state];
  }
};

export default notesReducer;
