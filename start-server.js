var connect = require('connect');
var serveStatic = require('serve-static');
//Install dependencies: npm i connect && npm i serve-static

//Used to host the page at localhost:8080
var app = connect();

app.use(serveStatic(__dirname, {'index': ['index.html']}));
app.listen(8080);


function idle() {
    console.log(`CONNECTION ACTIVE!`) // if the console is getting spammy just replace it with console.log(``)
} 

setInterval(idle, 30000); //repeat the process every 30 seconds, this works as a background process to keep the app alive
