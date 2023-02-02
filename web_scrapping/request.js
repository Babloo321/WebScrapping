const request = require("request");
request("https://www.worldometers.info/coronavirus/", cb);      // cb-->call back
function cb(err, res, body){
    console.log("error", err);
    // console.log(res);
    console.log(body);
}