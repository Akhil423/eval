// JavaScript source code

const cheerio = require('cheerio');     // for dealing with html dom elemnets



var open = require('opn');  // for triggering report file in browser


var moment = require('moment');                                 // for getting timestamp of system

var time = moment();
var real = time.format('YYYY-MM_HH-mm-ss');

var fs = require('fs');
var data = fs.readFileSync("D:\\Users\\kvarma\\mywork\\tests\\test.html", "utf8");


const $ = cheerio.load(data);

module.exports = {


    rep: function(filename,json) {

        
        

        //console.log(JSON.stringify(json));
        var repo = $('#myTable');
        var stat = $('.w3-quarter h3');
        //  console.log(Object.keys(json.issues).length);
        $(stat[0]).text(json.issues.filter(issue => issue.type === 'error').length);
        $(stat[1]).text(json.issues.filter(issue => issue.type === 'warning').length);
        $(stat[2]).text(json.issues.filter(issue => issue.type === 'notice').length);
        $(stat[3]).text(1);


        for (var i in json.issues) {

            $(repo[0]).append("<tr><td>" + json.issues[i].code + "</td></tr>");
            $(repo[1]).append("<tr><td>" + json.issues[i].message + "</td></tr>");
            $(repo[2]).append("<tr><td>" + json.issues[i].type + "</td></tr>");

        }

        //console.log($.html);
        fs.writeFile("reports\\report" + real + "\\html\\" + "test" + ".html", $.html(), function (err) {
            if (err) {
                return console.log(err);
            }
            //console.log("reports\report" + real + "\html\\" + filename + ".html");
        });

       



    }



}