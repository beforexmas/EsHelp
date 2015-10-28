/* Main Dicerool file */
var firstTime=true;

function randa() {
    return Math.round(Math.random() * 5 + 1);
}

$(document).ready(function(){  
    
    $("#rollBarra").hide();
    
    $("#Btn").click(function(event){
        var numDadi=$("#startBarra").val(); //Sopra 25 macello
        //Se è il primo click, è lo start
        if (firstTime==true) {     
            //Cambio nome al button
            $("#Btn").text("Roll dices");
            firstTime=false;
            
            //Inserisco il num di dadi richiesti, randomizzando i valori dadici
            for (var i=0;i<numDadi;i++) {
                $("#listaDadi").append(
                    "<img id='dado' src='img/dice-n.png'></img>".replace('n',randa())
                );
            }
        }
        
        //Il roll che cabia i valori
        if (firstTime==false) {
            $("#startBarra").hide();
            $("#listaDadi").empty();
            for (var i=0;i<numDadi;i++) {
                $("#listaDadi").append(
                    "<img id='dado' src='img/dice-n.png'></img>".replace('n',randa())+
                    "<span></span>"
                );
            }
        }
    });
     $("#Btn2").click(function(event){ 
        window.location.reload();
     });
    
});

Dice = {
    roll : function(){
        //Math.round(Math.random() * 5 + 1)
    }

};