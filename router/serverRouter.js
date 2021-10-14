let express = require('express');

var router = express.Router();
var url = "https://webdemo.dev"

router.get('/',function(req,res){
    res.send(url);
});

module.exports = router;