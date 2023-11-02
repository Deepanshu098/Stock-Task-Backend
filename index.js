const server = require('./app');
require('dotenv').config();

const host=process.env.HOST;
const PORT_NO=process.env.PORT;

server.listen(PORT_NO,host,()=>{
    console.log(`Server started at http://${host}:${PORT_NO}`)
})