class SiteController {
    //[GET] /home
    index(req, res) {
        res.render('home');
    }

    //[GET] /share
    share(req, res) {
        res.render('share');
    }
}

module.exports = new SiteController();
