import fs from "fs"

function sizeChecker9filename{
    const stts = fs.statSync(filename)
    const limit = 2*1024*1024
    console.log("File should be less than 2MB")

}
else{
    console.log("File has been submitted successfully");

}

const sizeChecker = ()=>{

}