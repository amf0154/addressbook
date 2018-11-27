const express = require('express');
var bodyParser = require("body-parser");
var cors = require('cors');
var morgan = require('morgan');
var app = express();
app.use(morgan('combined'));
morgan(function(tokens, req, res){ return 'some format string' });
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
var routesApi = require('./api/routes/indexApi');
require('./api/models/db_connection');
app.set('port',process.env.PORT || 3000);
app.use('/api', routesApi);
app.use('/',(req,res)=>{ res.send('Express is working!') });
app.listen(app.get('port'),()=>{
console.log(`Server listening on ${app.get('port')}`);
})