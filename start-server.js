var connect = require('connect');
var serveStatic = require('serve-static');
//npm i connect 
//npm i serve-static

//Used to host the page at localhost:8080
var app = connect();

app.use(serveStatic(__dirname, {'index': ['index.html']}));
app.listen(3000);


function idle() {
    console.log(`CONNECTION ACTIVE!`)
}

setInterval(idle, 30000);
