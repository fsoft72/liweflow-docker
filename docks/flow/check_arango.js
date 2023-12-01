// this script fetch "http://arangodb:8529/_api/version" and exists with 0 if it returns 200
// otherwise it fetches again and again until it returns 200 or timeout

const http = require( 'http' );

const url = 'http://arangodb:8529/_api/version';
const timeout = 1000 * 60 * 5; // 5 minutes
const start = Date.now();

function check () {
	console.log( "=== ArangoDB is not ready yet, waiting for it to start ===" );
	http.get( url, ( res ) => {
		if ( res.statusCode === 200 ) {
			process.exit( 0 );
		} else if ( Date.now() - start > timeout ) {
			console.error( 'timeout' );
			process.exit( 1 );
		} else {
			setTimeout( check, 2000 );
		}
	} ).on( 'error', ( e ) => {
		// console.error( e.message );
		setTimeout( check, 2000 );
	} );
}

check();