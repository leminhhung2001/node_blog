const { render } = require('node-sass');
const Course = require('../model/Course')

const { multipleMongooseToObject } = require('../../util/mongoose')
class CourseController {
    //[GET] /courses/:slug
    show(req, res) {
        res.send('Le Minh Hung')
    }
}

module.exports = new CourseController();
