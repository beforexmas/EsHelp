function buildArray() {
    var array=[];
    var length=parseInt(prompt("Dim"));
    for(var i=0;i<length;i++) {
        array.push(parseInt(prompt("Elemento #"+i)));    
    }
    return array;
}

function Somma(lista) {
    var sandro=0;
    for(var i=0;i<lista.length;i++) {
        sandro+=pluto[i];
    }
    return sandro;
}

var pluto=[];
pluto=buildArray();
alert(Somma(pluto));

