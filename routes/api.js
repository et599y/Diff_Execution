var express=require('express'); 
var router=express.Router();
var listModel=[];
var id=1;

router.get('/getlist', function(req, res){
    res.send('hello world');
})

module.exports = router;