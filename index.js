const express = require('express');
const app = express();
var routesApi = require('./api/routes/indexApi');
app.set('port',process.env.PORT || 80);
app.use('/api', routesApi);
app.use('/',(req,res)=>{ res.send('Express is working!') });
app.listen(app.get('port'),()=>{
console.log(`Server listening on ${app.get('port')}`);
})