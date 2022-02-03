import {
    addNoteActionCreator,
    editNoteActionCreator,
    deleteNoteActionCreator
} from "types/actionCreatorType";

export const addNote : addNoteActionCreator = (note) => {
  return {
      type : "ADD_NOTE",
      note
  };
};

export const editNote: editNoteActionCreator = (note) => {
  return {
    type: "EDIT_NOTE",
    note,
  };
};

export const deleteNote : deleteNoteActionCreator = (note) => {
  return {
    type: "DELETE_NOTE",
    note,
  };
};
