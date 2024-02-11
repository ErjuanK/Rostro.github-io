var a = prompt("Dime una ciudad de españa")
const imagen = document.getElementById("imagen");

switch(a) {
    case "Sevilla":
        document.write("<h2>Pertences a la comunidad autonoma de Andalucía</h2>");
        src = "https://cope-cdnmed.cope.es/resources/jpg/0/4/1648111595140.jpg";
        break;
    case "Madrid":
        document.write("<h2>Pertences a la comunidad autonoma de Madrid</h2>");
        src = "https://png.pngtree.com/background/20230409/original/pngtree-map-of-spain-madrid-europe-photo-picture-image_2373281.jpg";
        break;
    case "León":
        document.write("<h2>Pertences a la comunidad autonoma de Castilla y león</h2>");
        src = "https://i.pinimg.com/originals/27/05/cb/2705cb7c56a7388ca4c50b82bbdd23a3.gif";
        break;
    default:
        document.write("<h2>Porfavor una ciudad de españa</h2>");
        src = "https://i.pinimg.com/736x/21/85/dc/2185dcb99697c7ba0d456290d15a687e.jpg";
    }
imagen.src = src;

Reintentar(function() { window.location=window.location;},5000);