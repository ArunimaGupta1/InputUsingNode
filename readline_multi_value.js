// load the module
let readline = require("readline");
var obj = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

obj.question("Enter the id ",(id)=>{

    obj.question("Enter the name",(name)=>{

        obj.question("Enter the salary ",(salary)=>{

            console.log("Your ID is "+id);
            console.log("Your name is "+name);
            console.log("Your salary is "+salary);
            obj.close();
        })
    })
})