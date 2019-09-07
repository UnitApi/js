var Load = function (target, success, error) {
    //url is URL of external file, success is the code
    //to be called from the file, location is the location to
    //insert the <script> element
    this.cfg = {};
    this.cfg.target = target;
    this.cfg.delay = 0;
    this.cfg.cache = 0;

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

    this.loadJs = function (url, target, success, error) {
        var suffix = '';
        if (typeof self.cfg.cache === 'number' && self.cfg.cache === 1) {
            suffix = '?' + time();
        }

        if (typeof url === 'object') {
            //console.log('obj:', obj);

            for (var i in url) {

                console.log('load js url[i]', url[i]);

                try {
                    var exe = loadJs(url[i] + suffix, target, success, error);
                    console.log('load js ', url[i], exe);
                } catch (err) {
                    console.error('!load js ', url[i], err);
                }
            }
        } else {
            loadJs(url + suffix, target, success, error);
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
                    var exe = loadHtml(url[i], self.cfg.target, success, error);
                    console.log('load js ', url[i], exe);
                } catch (err) {
                    console.error('!load js ', url[i], err);
                }
            }
        } else {
            loadHtml(url, self.cfg.target, success, error);
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
                    var exe = loadStyle(url[i], self.cfg.target, success, error);
                    console.log('load js ', url[i], exe);
                } catch (err) {
                    console.error('!load js ', url[i], err);
                }
            }
        } else {
            loadHtml(url, self.cfg.target, success, error);
            // console.error('apiunit obj: is not object:', obj);
        }
        return this;
    };

    this.image = function (url) {
        if (typeof url === 'object') {
            //console.log('obj:', obj);

            for (var i in url) {

                console.log('load js url[i]', url[i]);

                try {
                    var exe = loadImage(url[i], self.cfg.target, success, error);
                    console.log('load js ', url[i], exe);
                } catch (err) {
                    console.error('!load js ', url[i], err);
                }
            }
        } else {
            loadHtml(url, self.cfg.target, success, error);
            // console.error('apiunit obj: is not object:', obj);
        }
        return this;
    };

    // return this;
};

function loadJs(url, target, success, error) {
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

function loadHtml(url, target, success, error) {

}

function loadStyle(url, target, success, error) {

}

function loadImage(url, target, success, error) {

}

var time = Date.now || function () {
    return +new Date;
};

// time();
