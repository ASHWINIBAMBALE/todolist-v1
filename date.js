exports.getDate= function () {
const toDay= new Date();
  
const options ={
    weekday:"long",
    day:"numeric",
    month:"long"
}
return toDay.toLocaleDateString("en-US",options)
 
}
exports.getDay=function (){
  const toDay= new Date();
    
  const options ={
      weekday:"long",
     
  }
  return  toDay.toLocaleDateString("en-US",options)
   
  }
  console.log(module.exports)