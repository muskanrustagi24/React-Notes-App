import {
  addNoteAction,
  editNoteAction,
  deleteNoteAction,
} from "./actionsType";

export type addNoteActionCreator = (note: string) => addNoteAction;

export type editNoteActionCreator = (note: string) => editNoteAction;

export type deleteNoteActionCreator = (note: string) => deleteNoteAction;
