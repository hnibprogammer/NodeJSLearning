const { render } = require("node-sass")
const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose')

class CourseController {
  // [GET] /courses/:slug
  show(req, res, next) {

    Course.findOne({ slug: req.params.slug })
      .then((course) => {
        res.json(course)
      })
      .catch(next)

  }

}

module.exports = new CourseController;