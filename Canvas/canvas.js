var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("boton");

var d = document.getElementById("draw");
var lienzo = d.getContext("2d");
var lineas;
var l = 0;


boton.addEventListener("click", dibujoPorClick);

function dibujoPorClick(){
    lineas = parseInt(texto.value);
    //Ciclo while de Curvas
    while(l < lineas){
        trazo("#FFEEAD", 2, 0, (d.width/lineas)*l , (d.width/lineas)*(l+1), 500);
        l++;
    }
    //Ciclo for de curvas
    for (i= 0; i< lineas; i++){
        trazo("#FFEEAD", 2, (d.width/lineas)*i, 0, 500, (d.width/lineas)*(i+1));
    }
    for (i= 0; i< lineas; i++){
        trazo("#FFEEAD", 2, d.width-((d.width/lineas)*i), 0, 0, (d.width/lineas)*(i+1));
    }
    for (i= 0; i< lineas; i++){
        trazo("#FFEEAD", 2, 500, (d.width/lineas)*i, d.width-((d.width/lineas)*(i+1)), 500);
    }
    console.log(texto.value+" "+lineas+" "+d.width);
}

function trazo(color, w, x1, y1, x2, y2){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = w;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
}

/*//Canvas Frame
trazo("#D9534F", 2, 0, 0, 500, 0);
trazo("#D9534F", 2, 500, 0, 500, 500);
trazo("#D9534F", 2, 500, 500, 0, 500);
trazo("#D9534F", 2, 0, 500, 0, 0);
//Trazo Cruz
trazo("#D9534F", 2, 250, 0, 250, 500);
trazo("#D9534F", 2, 0, 250, 500, 250);*/