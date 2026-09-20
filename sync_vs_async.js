console.log("=== Synchronus Start");
for(let i=0; i<10; i++){
    consol.log ('${i}')
}
console.log("=== Synchronus Start");

console.log("===Asynchronus Start");
setTimeout(()=>{
    console.log("Hello World")
}, 2000)
console.log("===Asynchronus End"); 