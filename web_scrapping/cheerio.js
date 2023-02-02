const cheerio = require("cheerio");
let html = `<ul id="fruits">
<li class="apple">Apple</li>
<li class="orange">Orange</li>
<li class="pear">Pear</li>
</ul>`;
// cheerio store data in form of object
// data store in cheerio in tree formate
let selecTool = cheerio.load(html);
// cheerio store all html file in tree structure
let fruitNameArr = selecTool("#fruits");
console.log(fruitNameArr.text());          // it gives all fruits name

let fruitName = selecTool(".pear");
console.log(fruitName.text());              // it give only pear fruit name