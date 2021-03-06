const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const db = require('./config/db')

const app = express();

const port = 3000;

const route = require('./routes');

//Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); 
// console.log(__dirname)
// console.log('PATH: ', path.join(__dirname, 'resources/views'))

//Lay anh ra bang static
app.use(express.static(path.join(__dirname, 'public')));

//Http logger
//app.use(morgan('combined'))

//Xử lý dữ liệu từ form submit lên server
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//Xử lý dữ liệu từ JS gửi lên server
app.use(express.json());

//route init
route(app);


//Connect to DB
db.connect()

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
