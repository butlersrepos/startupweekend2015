window.addEventListener('load', function () {
    // Get the canvas element.
    var elem = document.getElementById('rashy');
    if (!elem || !elem.getContext) {
        return;
    }

    // Get the canvas 2d context.
    var context = elem.getContext('2d');
    if (!context || !context.getImageData || !context.putImageData || !context.drawImage) {
        return;
    }

    // Create a new image.
    var img = new Image();

    // Once it's loaded draw the image on canvas and invert the colors.
    img.addEventListener('load', function () {
        var x = 0, y = 0;

        // Draw the image on canvas.
        context.drawImage(this, x, y);

        // Get the pixels.
        var imgd = context.getImageData(x, y, this.width, this.height);
        var pix = imgd.data;

        // Loop over each pixel and invert the color.
        var factor = 2;

        for (var i = 0, n = pix.length; i < n; i += pix.length / (factor * 2)) {
            var y = (i / 4) / (imgd.width / factor);
            var x = (i / 4) / (imgd.height / factor);
            context.fillRect(x, y, imgd.width / factor + x, imgd.height / factor + y);
            //pix[i  ] = 255 - pix[i  ]; // red
            //pix[i+1] = 255 - pix[i+1]; // green
            //pix[i+2] = 255 - pix[i+2]; // blue
            // i+3 is alpha (the fourth element)
        }

        // Draw the ImageData object.
        //context.putImageData(imgd, x, y);
    }, false);

    img.src = 'img/rash-or-not-rash.jpg';
}, false);