import { makeServer } from './mirageServer.js';

const server = makeServer();

process.on('exit', function(code) {
    return console.log(`About to exit with code ${code}`, server);
});
