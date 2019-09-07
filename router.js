/**
 * @param include
 * @param error
 * @param success
 * @constructor
 */
var Router = function (include, error, success) {

    this.cfg = {};
    this.cfg.target = 'body';
    this.include = include;
    this.included = [];


    if (typeof error !== 'function') {
        error = function (data) {
            console.log('error', "Page not found.");
            // console.error(data);
            // AddMessage(data.message.error);
        }
    }

    if (typeof success !== 'function') {
        success = function (data) {
            console.log('success', "included");
            // console.table(data);
            // AddMessage(data.message.info);
        }
    }

    this.error = error;
    this.success = success;

    var router = this;


    // var obj = this;
    this.docs = function (obj) {
        if (typeof obj !== 'object') {
            console.error('apiunit.docs: is not object:', obj);
            return this;
        }

        for (var i in obj) {
            console.log('apiunit.docs: ', i, ' = ', obj[i]);

            // for (var name in obj[i]) {
            //     console.log('apiunit.docs: ', name, obj[i][name]);
            // }
        }
        return this;
    };


    this.image = function (files) {

        if (typeof files !== 'object') {
            files = [files];
        }

        for (var i in files) {

            console.log('files[i] ', files[i]);

            var exist_in_apiunit = router.included.indexOf(files[i]) !== -1;

            console.log('exist_in_apiunit ', exist_in_apiunit);


            if (!exist_in_apiunit) {
                router.include.includeImg(files[i], router.cfg.target, router.error, router.success);
                router.included.push(files[i]);

            } else {
                console.error('!exist: ', files[i]);
            }
        }

        return this;
    };


    this.domain = function (domain) {
        if (typeof domain !== 'object') {
            router.cfg.domain = domain;
            // router.included.push(domain);
        } else {
            console.error('apiunit.domain: is an object:', domain);
        }

        return this;
    };

    // let img = new Image;
    //
    // img.onload = function() {
    //     console.log ("Bild geladen");
    //     elem.appendChild (img);
    // }
    // img.src = "../img/apiunit.png";  // erst nach dem Event Listener!
    //
    // window.onunload = function() {
    //     alert('bye bye Honey')
    // };
    //
    // window.onload = function () {
    //     console.log('Dokument geladen');
    // }
    //

    this.target = function (target) {
        router.cfg.target = target;

        return this;
    };

    this.html = function (files) {

        if (typeof files !== 'object') {
            files = [files];
        }
        // console.log('files ', files);

        if (typeof router.cfg.target !== 'string') {
            console.error('!router html router.cfg.target ', router.cfg.target);
            return this;
        }
        // var target = router.cfg.target

        for (var i in files) {

            console.log('files[i] ', files[i]);

            var exist_in_apiunit = router.included.indexOf(files[i]) !== -1;

            console.log('exist_in_apiunit ', exist_in_apiunit);


            if (!exist_in_apiunit) {
                router.include.includeUrl(files[i], router.cfg.target, router.error, router.success);
                router.included.push(files[i]);
            } else {
                console.error('!exist: ', files[i]);
            }
        }

        return this;
    };

    this.script = function (files) {
        if (typeof files !== 'object') {
            files = [files];
        }

        for (var i in files) {

            var exist_in_apiunit = router.included.indexOf(files[i]) !== -1;

            if (!exist_in_apiunit) {
                // router.include.addScriptToHead(files[i], router.cfg.target, router.error, router.success);
                router.include.addScriptToHead(files[i]);
                router.included.push(files[i]);
            } else {
                console.error('!exist: ', files[i]);
            }
        }

        return this;
    };

    this.script_onload = function (files) {
        // addScriptToHeadDelayed(file);
        window.onload = function () {
            router.include.addScriptToHead(file);
        };
        //router.included.push(file);
        // return this;
    };
    this.script_delay = function (file) {
        router.include.addScriptToHeadDelayed(file);
    };


    this.style = function (files) {
        if (typeof files !== 'object') {
            files = [files];
        }

        for (var i in files) {

            var exist_in_apiunit = router.included.indexOf(files[i]) !== -1;

            if (!exist_in_apiunit) {
                //router.include.addStyleToHead(files[i], router.cfg.target, this.error, this.success);
                router.include.addStyleToHead(files[i]);
                router.included.push(files[i]);
            } else {
                console.error('!exist: ', files[i]);
            }
        }

        return this;
    };

    this.style_string = function (file) {
        // addStyleStringToHeadDelayed(file);
        router.include.addStyleStringToHead(file);
        //router.included.push(file);

        // return this;
    };

    this.style_onload = function (file) {
        window.onload = function () {
            console.log('style_onload', file);
            router.include.addStyleToHead(file);
        }
        //router.included.push(file);
        // return this;
    };

    // return this;
};
