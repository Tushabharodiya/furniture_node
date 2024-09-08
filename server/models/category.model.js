let mongoose = require("mongoose")

let categorySchema = mongoose.Schema({
    categoryname: {
        type: String,
        required: true,
    }
}, { timestamps: true })


let Categorys = mongoose.model("categorys", categorySchema)

module.exports = Categorys;


let a=()=>{
    
      var  a=10
      a=20;
      if("20"==20)
    
    console.log(a);
    
}