// const http = require('http');

const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin.js');
const shopeRoutes = require('./routes/shope.js');
const dirname = require('./util/paths.js');
const path = require('path');

app.use(express.static(path.join(dirname,'public')));



app.use(shopeRoutes);
app.use('/admin',adminRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(dirname,'views','404.html'));

});


// app.disable('etag');






app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
// const server = http.createServer(app);

// server.listen(3000,()=>{
//     console.log('Server is running on port 3000');
 
// });
