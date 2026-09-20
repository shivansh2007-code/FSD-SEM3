const fetchUserData = new Promise((resolve, reject)=>{
       let success = true
       setTimeout(() => {
        if (success){
            resolve({id: 101, username: "zishan"});
        }else{
            reject("failed to fetch the user data");
        }
       }, 1000);
});
fetchUserData.then((user))=>{
    console.log(user);
})
.catch((err=>{
    console.log(err);
}))