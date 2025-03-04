//the entry point is server.js throgh this all the files would run
const  http= require('http')
const app= require('./app');
const port=process.env.Port||3000


const server= http.createServer(app);
//server.listen(3000)
server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})