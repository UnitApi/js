
var error = function (data) {
    console.error('restUrl', data);
    AddMessage(data.message.error);
};

var success = function (data) {
    console.log('restUrl', data);
    console.table(data);
    AddMessage(data.message.info);
};


// var form = new RestForm(document, error, success);

var incl = new Include();

var rout = new Router(incl);

// router, config, listener, config
var web = new Apiunit();
// web.target("#home-plugins");

web.router(rout);
//         "domain": "http://localhost:88",
//             "//js.jloads.com/rest.js",
//             "//js.jloads.com/form-event.js",
//     "script_delay": [
//     "/visitor/newsletter/js/foot.js"
//     ]
//     "//js.jloads.com/rest-url.js"
//     "//js.jloads.com/formToObject.min.js",


web.json({
    "docs": {
        "version": "0.0.1",
        "author": "Tom Sapletta",
        "company": "Softreck",
        "name": "Newsletter",
        "tags": "Newsletter, Create, Read, Update, Delete"
    },
    "target": "#home-plugins",
    "image": [
        "//app.jloads.com/visitor/home/img/apiunit.png"
    ],
    "html": [
        "//app.jloads.com/visitor/home/plugin/messages.html",
        "//app.jloads.com/visitor/newsletter/plugin/create.html"
    ],
    "style": [
        "//app.jloads.com/visitor/newsletter/css/black.css",
        "//app.jloads.com/visitor/home/css/mobile.css"
    ],
    "script": [
        "//js.jloads.com/message.js",
    ]
},100);


var elem = new E();
// var resp = new Response();
//
// var rout = new Listener(elem, Response);
//
// var event = new Apiunit();
// event.router(rout);
// event.json({
//     "submit": {
//         "target": "form",
//         "url": "//app.jloads.com/visitor/newsletter/php/index.php",
//         "method": "get"
//     },
// }, 200);

//
//
// var environment = new Apiunit();
//
// environment.router(form);
//
// environment.json({
//     "local": {
//         "domain": "/visitor/newsletter/php/index.php",
//         "method": "get"
//     },
// });

// jloads.event({
//         "target": "form",
//         "event": "submit",
//         "url": ""
// });
