const express = require("express")
const router = express.Router()
router.get("/", function(req, res){
    res.render("index", {
        title:"Mountain Express", text:"Superior service, personalized attention"
    })
})

router.post("/", function(req, res){
    console.log(req.body)
    //res.json() will pass through info from server back to front end
    res.redirect("/about")
})

module.exports=router

