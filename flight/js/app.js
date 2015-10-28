$(document).ready(function() {
    
    //inserisci voli da data.js
    for (var i=0;i<voli.length;i++) {
        $(".tabVoli").append(
            "<tr>" +
                "<td>Airline</td>".replace("Airline",voli[i].airline) +
                "<td>Flight</td>".replace("Flight",voli[i].flight) +
                "<td>Destination</td>".replace("Destination",voli[i].destination) +
                "<td>Departure</td>".replace("Departure",voli[i].departure_time) +
                "<td id='stat'>Status</td>".replace("Status",voli[i].status) +
                "<td>Gate</td>".replace("Gate",voli[i].gate) +
            "</tr>");    
    }
    
    //cambia colore agli status  (Non va)
    $(".tabVoli tr td").each(function() {
        if ($(this).text()=="delayed") {
            $(this).css('color','#CC0000');
        }
        if ($(this).text()=="scheduled") {
            $(this).css('color','#00CC00');
        }   
        if ($(this).text()=="boarding") {
            $(this).css('color','#FF9944');
        }   
        if ($(this).text()=="cancelled") {
            $(this).css('color','#999999');
        }        
    });
    
    //event handler dei checkboxes
    $("#sche").change(function() {
        var righe = $(".tabVoli tr").length; //potrebbe servire
        if($("#sche").is(':checked')) {
            //sto riaggiungendo
            $(".tabVoli tr td").each(function() {
                if($(this).text()=="scheduled") {
                    $(this).closest('tr').show();
                }
            });
        }
        else {
            //sto togliendo
            $(".tabVoli tr td").each(function() {
                if($(this).text()=="scheduled") {
                    $(this).closest('tr').hide();
                    
                }
            });
        }
    });
    
    $("#boar").change(function() {
        var righe = $(".tabVoli tr").length; //potrebbe servire
        if($("#boar").is(':checked')) {
            //sto riaggiungendo
            $(".tabVoli tr td").each(function() {
                if($(this).text()=="boarding") {
                    $(this).closest('tr').show();
                    
                }
            });
        }
        else {
            //sto togliendo
            $(".tabVoli tr td").each(function() {
                if($(this).text()=="boarding") {
                    $(this).closest('tr').hide();
                    
                }
            });
        }
    });
    
    $("#canc").change(function() {
        var righe = $(".tabVoli tr").length; //potrebbe servire
        if($("#canc").is(':checked')) {
            //sto riaggiungendo
            $(".tabVoli tr td").each(function() {
                if($(this).text()=="cancelled") {
                    $(this).closest('tr').show();
                    
                }
            });
        }
        else {
            //sto togliendo
            $(".tabVoli tr td").each(function() {
                if($(this).text()=="cancelled") {
                    $(this).closest('tr').hide();
                    
                }
            });
        }
    });
    
    $("#dela").change(function() {        
        var righe = $(".tabVoli tr").length; //potrebbe servire
        if($("#dela").is(':checked')) {
            //sto riaggiungendo
            $(".tabVoli tr td").each(function() {
                if($(this).text()=="delayed") {
                    $(this).closest('tr').show();
                    
                }
            });
        }
        else {
            //sto togliendo
            $(".tabVoli tr td").each(function() {
                if($(this).text()=="delayed") {
                    $(this).closest('tr').hide();
                    
                }
            });
        }
        
    });
    
});


