let NoteService;
( function ( NoteService ) {
    const notes = {};
    let IDCounter = 0;
    NoteService.createNote = ( {text,author,timestamp} ) => {
        const id = IDCounter++
        notes[ id ] = {id, text, author, timestamp: Number(timestamp)};
        return notes[ id ];
    }
    NoteService.getNotes = () => Object.values(notes);
    NoteService.getNote = (id) => notes[id];
    NoteService.deleteNote = (id) => delete notes[id];
} )( NoteService = exports.NoteService || ( exports.NoteService = {} ) );