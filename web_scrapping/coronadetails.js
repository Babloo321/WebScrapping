const request = require("request");
const cheerio = require("cheerio");


request("https://www.worldometers.info/coronavirus/", cb);
function cb(err, res, body){
    if(err){
        console.log("error", err);
    } else{
        handleHtml(body);
    }
}

function handleHtml(html){
    let selecTool = cheerio.load(html);
    let coronaStatusArr = selecTool(".maincounter-number");

    // finding total Cases
    let totalCases = selecTool(coronaStatusArr[0]).text();
    console.log("total Case : " + totalCases);

    // finding total Deaths
    let totalDeaths = selecTool(coronaStatusArr[1]).text();
    console.log("total Deaths: " + totalDeaths);

    // finding total Recovery
    let totalRecovered = selecTool(coronaStatusArr[2]).text();
    console.log("total Recovery: " + totalRecovered);
}