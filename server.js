const express = require('express');
const exphbs = require('express-handlebars');
const burgerRoutes = require('./controllers/burgers_controller');

//create server
const app = express();

//defines port
const PORT = process.env.PORT || 3000;

//uses public dir to serve static files
app.use(express.static('public'));

//adds data processing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(burgerRoutes);

app.listen(PORT, ()=>{
    console.log('Listening now on localhost:' + PORT);
});
