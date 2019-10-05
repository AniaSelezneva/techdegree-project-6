const express = require('express');
const data = require('./data.json') //require data.json
const { projects } = data;

const app = express();

app.set('view engine', 'pug');

app.use('/static', express.static('public'));

app.get('/', (req, res) => {
    res.render('index', {projects}); 
});

app.get('/project:id', (req, res) => {
    const { id } = req.params;
    const { technologies } = projects[id];
    res.render('project', {
        project: projects[id], 
        technologies
    }); 
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.use((req, res, next) => {
    const err = new Error ('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
  });

app.listen(3000, () => {
    console.log('The application is running at localhost:3000');
});