import NotesAPI from './notesAPI.js'
/*
NotesAPI.saveNotes({
  id: 2725312,
  title:'The Title Has Changed',
  body:'I\'m a New Note'
})
*/
NotesAPI.deleteNote(2725312)
console.log(NotesAPI.getAllNotes())
