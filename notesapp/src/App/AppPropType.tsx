import {notes} from 'types/storeType'
import {addNoteActionCreator,deleteNoteActionCreator} from 'types/actionCreatorType'

interface AppPropType {
  notes: notes;
  addNote: addNoteActionCreator,
  deletenote: deleteNoteActionCreator;
}

export default AppPropType;