/**
 * Rest
 * formToObject
 */
var RestForm = function (target, response, error, success) {

    this.cfg = {};
    this.cfg.target = "";
    this.cfg.method = "GET";
    this.cfg.url = "";

    // this.cfg.event = "submit";

    // var elmnt = el.first();

    var self = this;

    self.url = function (url) {
        self.cfg.url = url;
        return self;
    }

    self.cfg = function (cfg) {
        self.cfg = cfg;
        return self;
    }

    self.submit = function () {

        var cfg = self.cfg;

        if (typeof cfg === 'undefined') {
            cfg = {};
        }

        cfg.event = "submit";
        // cfg.target = "form";


        if (typeof cfg.target === 'undefined') {
            cfg.target = self.cfg.target;
        }

        cfg.element = new E(cfg.target);

        // config.event = cfg.event;
        // config.target = cfg.event;
        cfg.element.all('', function (forms) {

            var rest_form = new Rest(cfg.url, '?', response, error, success);

            // var forms = element.getElementsByTagName('form');
            // var forms = element.getElementsByTagName('form');

            for (var i = 0; i < forms.length; i++) {

                var form = forms[i];
                //formEvent(forms[i], rest_form, error, success);
                form.addEventListener(cfg.event, function (event) {
                    console.log(this);

                    var data = formToObject(this);
                    var method = data.method;

                    delete data.method;
                    delete data.submit;

                    console.log(method);

                    rest_form.byMethod(method, data);
                    console.log(data);

                    event.preventDefault();
                });
            }
        });
        // cfg.url;
        // cfg.method;
    }

    return self;
}
