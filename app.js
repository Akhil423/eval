'use strict';

var async = require('pa11y\\node_modules\\async');
var pa11y = require('pa11y');

                          
var fs = require('pa11y\\node_modules\\fs-extra');

var moment = require('moment');                                 // for getting timestamp of system

var time = moment();
var real = time.format('YYYY-MM_HH-mm-ss');
                                

             // for creating pre configured browser instance

console.log(__dirname);
var file = require(__dirname+'\\file.js');
var report = require(__dirname+'\\report.js');


// var dialog = require('dialog');                              // for creating system dialogs  

var util = require('util');                                     //to implement callabacify function on pa11y

var options = file.sheet();

file.shots();

//var urls = ['https://www.amazon.in/','https://www.amazon.in/'];
// Async function required for us to use await
async function runExample() {
    try {

        var pup = require('pa11y\\node_modules\\puppeteer');
        const browser = await pup.launch({

            ignoreHTTPSErrors: true,
            headless: false

        });

       // setTimeout(() => {  }, 9000);
          //var  page = await browser.newPage();
      

        
        //const page1 = await browser.newPage();
       

       console.log(options[0][2]);
       

        var i = 0;
        // Test 
        var result = await pa11y('https://www.amazon.in/', {
           
            timeout: 30000000,
            standard: options[0][2],
            browser: browser,
            ignoreHTTPSErrors: true,
            includeNotices: true,
            includeWarnings: true,
            actions: [
                'screen capture reports/report' + real + '/screenshot/shot' + [i++] + '.png',
                'click element .nav-a.nav_a',
                'wait for element .a-spacing-small to be visible',
            'screen capture reports/report' + real + '/screenshot/shot' + [i++] + '.png',
                'set field #ap_email to akhilvarma329@gmail.com ',
            'screen capture reports/report' + real + '/screenshot/shot' + [i++] + '.png',
                'click element #continue ',
                'wait for element #ap_password to be visible',
                'set field #ap_password to shivakhil329',
            'screen capture reports/report' + real + '/screenshot/shot' + [i++] + '.png',
                'click element .a-button-input',
                'wait for element .a-section.a-spacing-none.customer-name to be visible',
                'wait for element .np-grid-title to be visible',
                'screen capture reports/report' + real + '/screenshot/shot' + [i++] + '.png'
            ],
            log: {
                debug: console.log,
                error: console.error,
                info: console.log
            }



        });



       // 
        
      

       //await page.waitFor(3000);
      setTimeout(() => { browser.close(); },9000);

       
       
        
        /*var prom = Promise.resolve(result); // promise 

        prom.then(function (results) {

            
             // passing json result to nake html report

            

        });*/


       // await browser.close();
 
    } catch (error) {

        // Output an error if it occurred

        if (error)
            throw error;
        console.error(error.message);

    }

    //file.html()
    
    return result;
    console.log('i came here');
  
}


const callback = util.callbackify(runExample);

callback((err, ret) => {

    if (err)
        throw err;

    file.html();
    var prom = Promise.resolve(ret); // promise 

    prom.then(function (result) {
        
       
        // passing json result to nake html report
        report.rep("google", result);
        /*for (var i = 0; i < options[0]; i++){

            report.rep(urls[i],result[i]);

        }*/

        

    })
    

});

















/*, pa11y(urls[1], {




                timeout: 3000000,
                browser: page1,
                standard: options[1][2],
                ignoreHTTPSErrors: options[1][3],
                includeNotices: options[1][4],
                includeWarnings: options[1][5],
                actions: ['screen capture reports/report' + real + '/screenshot/shot' + [i++] + '.png',
                    'click element .nav-a.nav_a',
                    'wait for element .a-spacing-small to be visible',
                'screen capture reports/report' + real + '/screenshot/shot' + [i++] + '.png',
                    'set field #ap_email to akhilvarma329@gmail.com ',
                'screen capture reports/report' + real + '/screenshot/shot' + [i++] + '.png',
                    'click element #continue ',
                    'wait for element #ap_password to be visible',
                    'set field #ap_password to shivakhil329',
                'screen capture reports/report' + real + '/screenshot/shot' + [i++] + '.png',
                    'click element .a-button-input',
                    'wait for element .a-section.a-spacing-none.customer-name to be visible',
                    'wait for element .np-grid-title to be visible',
                'screen capture reports/report' + real + '/screenshot/shot' + [i++] + '.png']




            })]);*/



























///try 





//pa11y('https://www.amazon.com/', {
//    timeout: 50000000,
//    //browser: browser,
//    //standard: options[2], 
//    //wait: options[4],
//    //includeNotices: options[6],
//    //includeWarnings: options[7],
//    actions: [
//        'click element #nav-your-amazon ',
//        'wait for element .a-spacing-small to be visible',
//        'set field #ap_email to akhilvarma329@gmail.com ',
//         'click element #continue ',
//        'wait for element #ap_password to be visible',
//        'set field #ap_password to shivakhil329',
//        'click element #signInSubmit',
//        //'wait for element #nav-your-amazon-text to be visible'


//    ],



//    log: {
//        debug: console.log,
//        error: console.error,
//        info: console.log
//    }

//}).then((results) => {

//    var prom = Promise.resolve(results); // promise 

//        prom.then(function (result) {
//            //console.log(result);
//            console.log(err);


//            writeReportToHTML("gest2",result);

//        });

//   // writeReportToHTML("gest2", results);
//});


//runExample();
// report file creation