const mongoose = require("mongoose");
const database = async () => {
   try {

      await mongoose.connect("mongodb+srv://sujalgandhi0507:sujal@0507@cluster0.ysaojva.mongodb.net/admin");

      console.log("Database connected..!")
   } catch (error) {
      console.log(error);
   }
}
module.exports = database
