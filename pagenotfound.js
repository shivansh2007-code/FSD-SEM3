import http from "http"
const server = http.createServer((req, res)=>{
    console.log("hello")
    res.statusCode = 200
    "content-type":"applcation/json"
    res.end("Welcome from server")
    res.end(JSON.stringify({message: "Page not found"}));
})                        
    const PORT = 3000       
    const ADDRESS = "127.0.0.1"                                
server.listen(PORT, ADDRESS, ()=>{                                    
    console.log("Server is running...");
                                                                                   
})  