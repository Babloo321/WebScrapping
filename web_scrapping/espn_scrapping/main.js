const request = require("request");
const cheerio = require("cheerio");

let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
request(url, cb);
function cb(err, res, body){
    if(err){
        console.error("error", err);
    }else{
        handleHTML(body);
    }
}
function handleHTML(html){
let selecTool = cheerio.load(html);
// let anchorElement = selecTool(`a[data-hover="View All Results"]`);
// console.log(andcharElem);
// let relativeLink = anchorElement.attr("href");    // attr is a method in cheerio used ot find the attribute
// console.log(relativeLink);
let fullLink = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";
console.log(fullLink);
}
