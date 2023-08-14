const { render } = require("node-sass")
const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class SiteController {

  // [GET] /site
  index(req, res, next) {
    //option: .lean() to convert mongoose object -> plain object js
    Course.find({})
      .then(courses => res.render('home', {
        courses: multipleMongooseToObject(courses)
      }))
      .catch(next)

    // res.render('home')
  }

  // [GET] /search
  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController;