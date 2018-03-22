
const cheerio = require('cheerio');                               // for dealing with html dom elemnets
var fs = require('fs');
var moment = require('moment');                                 // for getting timestamp of system
var open = require('opn');                                      // for triggering report file in browser
           // for creating pre configured browser instance
var path = require('path');
const dire = require('mkdirp');                                    // for efficient report directories 

const {promisify} = require('util');
const readFile = promisify(fs.readFile);

 
var data = await fs.readFile(path.resolve(`${__dirname}/report.html`), "utf8");

const $ = cheerio.load(data);
module.exports = class report{


create(json){

   var time = moment();
var real = time.format('YYYY-MM_HH-mm-ss');
    
    if (!fs.existsSync(path.resolve(`${_dirname}/real/html/`))) {
    
    fs.mkdirSync(path.resolve(`${_dirname}/real/html/`), function (err) {
        if (err) console.error(err)
        else console.log('dir created')
    });
}
    
var repo = $('#myTable');
    var stat = $('.w3-quarter h3');
  //  console.log(Object.keys(json.issues).length);
    $(stat[0]).text(json.issues.filter(issue => issue.type === 'error').length);
    $(stat[1]).text(json.issues.filter(issue => issue.type === 'warning').length);
    $(stat[2]).text(json.issues.filter(issue => issue.type === 'notice').length);
    $(stat[3]).text(1);


    for (var i in json.issues){

        $(repo[0]).append("<tr><td>" + json.issues[i].code + "</td></tr>");
        $(repo[1]).append("<tr><td>" + json.issues[i].message + "</td></tr>");
        $(repo[2]).append("<tr><td>" + json.issues[i].type + "</td></tr>");

    }
    fs.writeFile(path.resolve(`${_dirname}/real/html/result.html`)), $.html(), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("reports\report" + real + "\html\\" + fileName + ".html");
    });

   open(path.resolve(`${_dirname}/real/html/result.html`));


}

}
