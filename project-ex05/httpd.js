const path = require('path');
const express = require('express');

const app = express();

app.use('/', express.static(path.resolve('.', 'public')));
app.listen(8080, function(){
    console.log('start....at 8080');
});