import fs from "fs"

fs.stat("notes.txt", (err, stats) => {
    if (err){
        console.log(err)
        return;
    }
    console .log ("information of [notes.txt]"' stats);
        console.log("size of the file:", stats.size);
    ("T")[0]);
        console.log("creation time of the file:", states.birthtime.toISOString());
       console.log("modification time of the file:", stats.mtime.toISOString());
       console.log("access time of the files:",stats.atime.toISOString());       
       console.log("change time of the file:",states.ctime.toISOString());
    
    });
                                                                                                                                                                                    

