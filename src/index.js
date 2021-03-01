const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars')

const app = express()


const port = 3000

//Template engine
app.engine('hbs', handlebars({
  extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))
// console.log(__dirname)
// console.log('PATH: ', path.join(__dirname, 'resources/views'))

//Lay anh ra bang static
app.use(express.static(path.join(__dirname, 'public')))

//Http logger
//app.use(morgan('combined'))

//Xử lý dữ liệu từ form submit lên server
app.use(express.urlencoded({
  extended: true
}))
//Xử lý dữ liệu từ JS gửi lên server
app.use(express.json())

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
  //console.log(req.query.q);
  res.render('news')
})

app.get('/share', (req, res) => {
  //console.log(req.query.author);
  res.render('share')
})

app.post('/share', (req, res) => {
  //console.log(req.query.author);
  console.log(req.body);
  res.render('share')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})