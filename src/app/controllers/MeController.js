const { render } = require('node-sass');
const Course = require('../model/Course')

const { multipleMongooseToObject } = require('../../util/mongoose')
class MeController {

    //[GET] /me/stored/courses
    storesCourses(req, res, next) {
        Course.find({})
            .then(courses => res.render('me/stores-courses', {
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next)
        
    }


}

module.exports = new MeController();
