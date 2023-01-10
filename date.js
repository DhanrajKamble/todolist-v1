
module.exports.getDate = getDate;

function getDate(){
    
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    const day = today.toLocaleDateString("en-US", options);
    
    return day;
}

module.exports.getDay = getDay;

function getDay(){
    
    const today = new Date();
    const options = {
        weekday: "long"
    };
    
    let day = today.toLocaleDateString("en-US", options);
    
    return day;
}

console.log(module.exports);