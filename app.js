const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname  +"/date.js")

var items=[]
let workitems=[];
const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('view engine', 'ejs');
app.get("/", function(req,res){
    let day=date.getDate()
    res.render("list",{listtitle:day,newlistitems:items})
})
app.post("/",function(req,res){  
    console.log(req.body)
 let item=req.body.newitem
 if (req.body.list ==="work")
 {
    workitems.push(item)
    res.redirect("/work")
} else{
    items.push(item)
    res.redirect("/")
}
  
//    res.redirect("/")
})
app.get("/work",function(req,res){
    
    res.render("list",{listtitle:"work List",newlistitems:workitems})
});
app.post("/work",function(req,res){
    let item=req.body.newitem;
    workitems.push(item);
    res.redirect("/work")
})
app.listen(3000,function(){
    console.log("Server stated at port  3000")
})