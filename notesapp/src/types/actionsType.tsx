export interface addNoteAction {
  type: "ADD_NOTE";
  note: string;
}
export interface deleteNoteAction {
  type: "DELETE_NOTE";
  note: string;
}
