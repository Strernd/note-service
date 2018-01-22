const restify = require( 'restify' );
const {NoteService} = require( './NoteService' );
const server = restify.createServer();
server.use(restify.plugins.bodyParser({mapParams: true}));
server.get( '/note/', ( req, res ) => res.json( NoteService.getNotes() ) );
server.get( '/note/:id', ( req, res ) => res.json( NoteService.getNote( Number( req.params.id ) ) ) );
server.del( '/note/:id', ( req, res ) => res.json( NoteService.deleteNote( Number( req.params.id ) ) ) );
server.post( '/note/', ( req, res ) => res.json( 201, NoteService.createNote( req.params ) ));
server.listen( 8080, () => console.log( '%s listening at %s', server.name, server.url ) );