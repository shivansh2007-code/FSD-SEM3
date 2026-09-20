import fs from 'fs'

fs.watchFile("notes.txt", (prev, curr)=>{
console.log("Previous", prev)
console.log("Current", curr)
if (prev !== curr){
setTimeout(()=>{
    watcher.close()
    console.log("File watching closed")
},5000)                                                                      
}            
})    