

module.exports = class report{


create(dir,json){

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
    fs.writeFile("reports\\report"+real+"\\html\\" + fileName + ".html", $.html(), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("reports\report" + real + "\html\\" + fileName + ".html");
    });

   open('D:\\Users\\kvarma\\source\\repos\\NodejsConsoleApp1\\NodejsConsoleApp1\\reports\\report'+real+'\\html\\result.html');


}

}
