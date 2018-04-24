// JavaScript source code

var fs = require('fs');
var dir = require('mkdirp');   

var path = require('path');

var moment = require('moment');                                 // for getting timestamp of system

var time = moment();
var real = time.format('YYYY-MM_HH-mm-ss');

module.exports = {


    html: function () {

        if (!fs.existsSync('reports\report' + real + '\html/')) {

            dir('reports/report' + real + '/html/', function (err) {
                if (err) console.error(err)
                else console.log('dir created')
            });
        }
    },

    sheet: function () {


        // using excel to bring robustness
        var Excel = require('exceljs');
        var workbook = new Excel.Workbook();
        var err;

        var options = [[]];
        workbook.xlsx.readFile('D:\\Users\\kvarma\\Desktop\\data.xlsx')
            .then(function () {


                var worksheet = workbook.getWorksheet(2);
                var row = worksheet.getRow(7);
                options[0][0] = row.getCell(2).value;

                console.log(options[0][0]);

                 for (var i = 1; i <options[0][0]; i++) {

                     var worksheet1 = workbook.getWorksheet(2);
                     options[i] = [];
                    // options[i] = '';
                    for (var j = 2; j <=6 ; j++){

                      
                        //var key = "A" + i;
                        //console.log(key);
                        console.log('worksheet');
                        row = worksheet1.getRow(j);
                       // console.log(row.getCell(2).value);
                        options[i-1][j]= row.getCell(2).value;

                    }
                }




            });

        return options;
    },

    shots: function () {




        // creating directory for screenshots
        if (!fs.existsSync('reports\report' + real + '\screenshot/')) {
            //fs.mkdirSync('reports' + real + '\html/');
            dir('reports/report' + real + '/screenshot/', function (err) {
                if (err) console.error(err)
                else console.log('dir created')
            });
        }
    }

};








