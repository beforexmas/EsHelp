
function isTriangle(l1,l2,l3) {
    var tipo="";
	if ((l1<(l2+l3))&&(l1>(Math.abs(l2-l3)))) {
		if ((l2<(l1+l3))&&(l2>(Math.abs(l1-l3)))) {
			if ((l3<(l1+l2))&&(l3>(Math.abs(l1-l2)))) {
				if((l1==l2)&&(l2==l3)) {
                    tipo="Equilatero";
                }	
                if ((l1!=l2)&&(l2!=l3)) {
                    tipo="Scaleno";    
		        }
                if (((l1==l2)&&(l2!=l3))||((l1!=l2)&&(l2==l3))) {
                    tipo="Isoscele";
                }
                alert("E' un triangolo: "+tipo);
            }
	    }
    }
}


var l1=parseInt(prompt("l1:"));
var l2=parseInt(prompt("l2:"));
var l3=parseInt(prompt("l3:"));
isTriangle(l1,l2,l3); 