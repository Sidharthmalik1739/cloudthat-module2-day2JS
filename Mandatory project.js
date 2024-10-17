const prompt = require("prompt-sync")();
function total()
{
    var a = prompt (" HTML marks")
    var b = prompt (" CSS marks")
    var c = prompt (" JS marks")
    console.log("out of 100 you scored ");
    
    total = a+b+c
    console.log("Total marks obtained",total);
    
}
function percentage()
{
    return (total/3)
}

for (let i = 0; i<3;i++)
    {

    }