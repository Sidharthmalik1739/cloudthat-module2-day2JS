let current_month = "jan"
let message

switch(current_month)
{
    case "jan"||"feb"||"dec"||"nov":
        message = "this is winter season";
    break;
    case "mar" || "apr" || "may" || "june":
        message = "this is summer season";
    break;
    case "Jul" || "aug" || "sep" || "oct":
        message = "this is monsoon season";
    break;        


}
console.log(message)
