let count = 1;
document.getElementById("radio1").checked = true
var contador = 0

setInterval(function () {
    nextImage();
}, 3000)

function nextImage() {
    contador++
    count++;
    if (count > 4) {
        count = 1;
    }
    if (count == 1) {
        document.getElementById("img_hugo").style.color = "lime"
        document.getElementById("img_jinkun").style.color = "white"
    }
    if (count == 2) {
        document.getElementById("img_hugo").style.color = "white"
        document.getElementById("img_malong").style.color = "lime"
    }
    if (count == 3) {
        document.getElementById("img_malin").style.color = "lime"
        document.getElementById("img_malong").style.color = "white"

    }
    if (count == 4) {
        document.getElementById("img_malin").style.color = "white"
        document.getElementById("img_jinkun").style.color = "lime"

    }
    
    
    document.getElementById("radio" + count).checked = true;

}

