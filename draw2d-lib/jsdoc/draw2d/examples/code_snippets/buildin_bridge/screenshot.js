function getAverageRGB(imgEl) {

    defaultRGB = {r : 0,g : 0,b : 0};
    try {
        var blockSize = 5, // only visit every 5 pixels
        canvas = document.createElement('canvas'), 
        context = canvas.getContext && canvas.getContext('2d'), 
        data, 
        i = -4, 
        rgb = {r : 0,g : 0,b : 0}, 
        count = 0;

        if (!context) {
            return defaultRGB;
        }

        var height = 100; // inspect only the toolbar area instead of the complet image canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
        var width  = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

        context.drawImage(imgEl, 0, 0);

        data = context.getImageData(0, 0, width, height);
    }
    catch (e) {
        return defaultRGB;
    }

    var length = data.data.length;

    while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }

    // ~~ is faster than Math.floor 
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;

}

function getIdealTextColor(c) {
    var nThreshold = 105;
    var bgDelta = (c.r * 0.299) + (c.g * 0.587) + (c.b * 0.114);
    return (255 - bgDelta < nThreshold) ? "#000000" : "#FFFFFF";
}

var img = new Image();
img.onload = function() {
    var mainColor = getAverageRGB(img);
    var textColor = getIdealTextColor(mainColor);
}

img.src = "https://www.twogo.com/web/content/UserImage?logonName=andreas.herz%40sap.com";
