//File JS này để lưu những trang như Home, Share, .. vì những trang như này thì nó không có nhiều nên ch
//chúng ta có thể để chung một thư mục nếu sau này nó có nhiều phần nhỏ ở trong thì có thế tạo thêm
//file như HomeController, ... để dễ quản lý

const express = require('express');

const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/share', siteController.share);

router.get('/', siteController.index);

module.exports = router;
