import {
  addNoteAction,
  deleteNoteAction,
} from "./actionsType";

export type addNoteActionCreator = (note: string) => addNoteAction;

export type deleteNoteActionCreator = (note: string) => deleteNoteAction;
