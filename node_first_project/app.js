// const http = require('http');

const express = require('express');
const dirname = require('./util/paths.js');
const path = require('path');
const errorcontroller = require('./controller/error.js');

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(dirname,'views'));
const adminRoutes = require('./routes/admin.js');
const shopeRoutes = require('./routes/shope.js');


const bodyParser = require('body-parser');

app.use(express.static(path.join(dirname,'public')));
app.use(bodyParser.urlencoded({ extended: false  }));



app.use(shopeRoutes);
app.use('/admin',adminRoutes);

app.use(errorcontroller.errorPage);


// app.disable('etag');






app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
// const server = http.createServer(app);

// server.listen(3000,()=>{
//     console.log('Server is running on port 3000');
 
// });
