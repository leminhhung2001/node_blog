const { render } = require('node-sass');
const Course = require('../model/Course')

const { multipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    //[GET] /home
    index(req, res) {

        //Thực hiện với promise
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(err => next(err))




        //Thực hiện với call back
        // Course.find({}, function(err, Course) {
        //     if(!err) res.json(Course)
        //     else res.status(400).json({ error: 'ERROR!!!' })
        // })
    
    
    }

    //[GET] /share
    share(req, res) {
        res.render('share');
    }
}

module.exports = new SiteController();
