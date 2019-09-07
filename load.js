var Load = function (target, success, error) {
    //url is URL of external file, success is the code
    //to be called from the file, location is the location to
    //insert the <script> element
    this.cfg = {};
    this.cfg.target = target;
    this.cfg.delay = 0;
    this.cfg.cache = 1;

    this.success = success;
    this.error = error;


    var self = this;

    this.delay = function (delay) {
        self.cfg.delay = delay;
        return this;
    };

    this.cache = function (cache) {
        self.cfg.cache = cache;
        return this;
    };

    this.noCache = function () {
        self.cfg.cache = 1;
        return this;
    };

    this.js = function (url) {
        if (typeof self.cfg.delay === 'number' && self.cfg.delay > 1) {
            setTimeout(function () {
                    console.log('delayed', self.cfg.delay, url);
                    self.loadJs(url, self.cfg.target, self.success, self.error);
                },
                self.cfg.delay
            );
        } else {
            console.log('loaded', url);
            self.loadJs(url, self.cfg.target, self.success, self.error);
        }
        return this;
    };
    this.javascript = this.js;
    this.script = this.js;


    this.loadJs = function (url, target, success, error) {
        var suffix = '';
        if (typeof self.cfg.cache === 'number' && self.cfg.cache !== 1) {
            suffix = '?' + time();
        }

        if (typeof url === 'object') {
            //console.log('obj:', obj);

            for (var i in url) {

                console.log('load js url[i]', url[i]);

                try {
                    var exe = includeJs(url[i] + suffix, target, success, error);
                    console.log('load js ', url[i], exe);
                } catch (err) {
                    console.error('!load js ', url[i], err);
                }
            }
        } else {
            includeJs(url + suffix, target, success, error);
            // console.error('apiunit obj: is not object:', obj);
        }

        return this;
    };


    this.html = function (url) {
        if (typeof url === 'object') {
            //console.log('obj:', obj);

            for (var i in url) {

                console.log('load js url[i]', url[i]);

                try {
                    var exe = includeHtml(url[i], self.cfg.target, success, error);
                    console.log('load js ', url[i], exe);
                } catch (err) {
                    console.error('!load js ', url[i], err);
                }
            }
        } else {
            includeHtml(url, self.cfg.target, success, error);
            // console.error('apiunit obj: is not object:', obj);
        }
        return this;
    };


    this.style = function (url) {
        if (typeof url === 'object') {
            //console.log('obj:', obj);

            for (var i in url) {

                console.log('load js url[i]', url[i]);

                try {
                    var exe = includeStyle(url[i], self.cfg.target, success, error);
                    console.log('load js ', url[i], exe);
                } catch (err) {
                    console.error('!load js ', url[i], err);
                }
            }
        } else {
            includeHtml(url, self.cfg.target, success, error);
            // console.error('apiunit obj: is not object:', obj);
        }
        return this;
    };
    this.css = this.style;

    this.image = function (url) {
        if (typeof url === 'object') {
            //console.log('obj:', obj);

            for (var i in url) {

                console.log('load js url[i]', url[i]);

                try {
                    var exe = includeImage(url[i], self.cfg.target, success, error);
                    console.log('load js ', url[i], exe);
                } catch (err) {
                    console.error('!load js ', url[i], err);
                }
            }
        } else {
            includeImage(url, self.cfg.target, success, error);
            // console.error('apiunit obj: is not object:', obj);
        }
        return this;
    };

    this.img = this.image;

    // return this;
};

function includeJs(url, target, success, error) {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.type = 'text/javascript';

    scriptTag.onerror = error;
    scriptTag.onload = success;
    scriptTag.onreadystatechange = success;

    if (typeof target === 'undefined') {
        target = document.body;
    }
    target.appendChild(scriptTag);
}

function includeHtml(url, target, success, error) {
    var xhttp;

    var el = new E(target);
    var elmnt = el.first();

    if (typeof success !== 'function') {
        success = function () {
            console.log('includeHtml success', "included");
        }
    }

    if (typeof error !== 'function') {
        error = function () {
            console.log('includeHtml error', "Page not found.");
        }
    }
    console.log('includeHtml url', url);

    if (url) {
        /* Make an HTTP request using the attribute value as the url name: */
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            console.log('includeHtml el_id', target);

            if (this.readyState == 4) {
                if (this.status == 200) {
                    // console.log('elmnt', elmnt);
                    // console.log('responseText', this.responseText);
                    // elmnt.innerHTML = this.responseText;
                    // elmnt.appendChild(this.responseText);
                    // elmnt.insertAdjacentHTML('beforeend', this.responseText);
                    // var e = document.createElement('div');
                    // e.innerHTML = this.responseText;
                    // while(e.firstChild) {
                    // elmnt.appendChild(e);
                    // }

                    // elmnt.insertAdjacentHTML('afterend', this.responseText);
                    elmnt.insertAdjacentHTML('beforeend', this.responseText);

                    success(this);
                }
                if (this.status == 404) {
                    elmnt.innerHTML = "includeHtml Page not found.";
                    error(this);
                }
                /* Remove the attribute, and call this function once more: */
                // includeHtml(url, success, error);
            }
        }
        xhttp.open("GET", url, true);
        xhttp.send();
        /* Exit the function: */
        return this;
    }
}

function includeStyle(url, target, success, error) {
    if (typeof target === 'undefined') {
        // target = document.body;
        target = document.getElementsByTagName('head')[0];
    }

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = url;

    link.onerror = error;
    link.onload = success;
    link.onreadystatechange = success;

    target.appendChild(link);
}

// function includeImage(url, target, success, error) {

function includeImage(url, target) {
    console.log('includeImg url: ', url);
    var el = new E(target);
    var elmnt = el.first();

    let img = new Image;
    img.onload = function () {
        console.log("includeImg onload: ", url);
        elmnt.appendChild(img);
    };
    img.src = url;  // erst nach dem Event Listener!

    // var image = document.images[0];
    // var downloadingImage = new Image();
    // downloadingImage.onload = function () {
    //     image.src = this.src;
    // };
    // downloadingImage.src = url;
}


var time = Date.now || function () {
    return +new Date;
};

// var time = new Date().getTime().toString();

// time();
// environment
// var ua = navigator.userAgent;
//
// if(ua.indexOf('Firefox') !== -1) {
//     // run Firefox-specific code
// } else if(ua.indexOf('Chrome') !== -1) {
//     // run Chrome-specific code
// }


// https://github.com/filamentgroup/loadCSS
