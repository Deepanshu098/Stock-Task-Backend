const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect(`mongodb://localhost:27017/stockprices`,{
//     useNewUrlParser:true,useUnifiedTopology:true
// })

// const DB = 'mongodb+srv://Deep7nshu:fqFkblzNTBWoN5SQ@cluster0.oapqoo1.mongodb.net/stocks_Data'

mongoose.connect(process.env.DB, {
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`connection successful`);
}).catch((err) => console.log(err));

