import {notes} from 'types/storeType'
import {addNoteActionCreator,editNoteActionCreator, deleteNoteActionCreator} from 'types/actionCreatorType'

interface AppPropType {
  notes: notes;
  addNote: addNoteActionCreator,
  editNote: editNoteActionCreator,
  deleteNote: deleteNoteActionCreator;
}

export default AppPropType;