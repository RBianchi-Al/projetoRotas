const express = require('express');
const consign = require('consign');

app = express();
app.set('port', 5555)


consign({ cwd: 'api' })
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app)
;

module.exports = app;