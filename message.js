// var HomeMessage = function (name, success, error) {
//     this.name = name;
//     this.success = success;
//     this.error = error;
//
//     this.create = function (data) {
//         restSubmit(this.name, 'GET', data, this.success, this.error);
//     }
//
// };

/**
 *
 * @param classname
 * @constructor
 */
var Message = function (classname) {
    // this.selector = selector;
    // if (typeof this.selector !== 'string') {
    //     console.error("is emptz selector for message");
    // }
    this.classname = classname;
    this.element = {};

    var self = this;


    this.getClassname = function () {
        if (typeof self.classname !== 'string') {
            self.classname = 'home-messages';
        }
        return self.classname;
    }


    this.getElement = function () {
        self.element = document.getElementsByClassName(self.getClassname())
        return self.element;
    }


    this.add = function (message) {
        console.log(message);

        var node = document.createElement("LI");                 // Create a <li> node
        var textnode = document.createTextNode(message);         // Create a text node
        node.appendChild(textnode);

        if (self.getElement()) {
            self.getElement()[0].appendChild(node);
        } else {
            console.error('handle element not exist for message');
        }

    }
}

/**
 *
 * @param text
 * @param classname
 * @constructor
 */
function AddMessage(text, classname = 'home-messages') {
    var message = new Message(classname);
    message.add(text);
}
