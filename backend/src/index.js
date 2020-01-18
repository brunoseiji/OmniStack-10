const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://brunoseiji:2310951312@cluster0-oe38v.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.use(express.json());
app.use(routes);


app.listen(3333); 