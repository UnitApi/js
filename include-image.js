function includeImage(url, target) {
    console.log('apiunit / image / ', url);
    var el = new E(target);
    var elmnt = el.first();

    let img = new Image;
    img.onload = function () {
        console.log("Including IMG:", url);
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
