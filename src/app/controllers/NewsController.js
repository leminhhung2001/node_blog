class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    showCourses(req, res) {
        res.send('Thanh cong roi');
    }
}

module.exports = new NewsController();
