/**
 * Rest
 * formToObject
 */
var RestForm = function (separator, error, success) {

    this.cfg = {};
    this.cfg.separator = separator;
    // this.cfg.event = "submit";

    // var elmnt = el.first();

    var self = this;

    this.submit = function (cfg) {
        if (typeof cfg === 'undefined') {
            cfg = {};
        }

        cfg.event = "submit";
        // cfg.target = "form";


        if (typeof cfg.separator === 'undefined') {
            cfg.separator = self.cfg.separator;
        }

        cfg.element = new E(cfg.separator);

        // config.event = cfg.event;
        // config.target = cfg.event;
        cfg.element.all('', function (forms) {

            var rest_form = new Rest(cfg.url, '?', error, success);

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

}
