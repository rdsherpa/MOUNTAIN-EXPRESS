const router = require('express').Router()
const path = require('path')

router.get('/', function(req, res){
    res.render('homepage') //handlebars
})
module.exports = router