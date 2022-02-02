import {
    addNoteActionCreator,
    deleteNoteActionCreator
} from "types/actionCreatorType";

export const addNote : addNoteActionCreator = (note) => {
  return {
      type : "ADD_NOTE",
      note
  };
};

export const deletenote : deleteNoteActionCreator = (note) => {
  return {
    type: "DELETE_NOTE",
    note,
  };
};
