const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars  = require('express-handlebars')

const app = express()
//Hưng đang thay đổi file này để h

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
