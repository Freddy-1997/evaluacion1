var x=1;
function factorial(){
 num1 = Number(document.getElementById('num').value);
 for(i=1;i<=num1;i++){
      x*=i;
 }
 alert("el factorial de 6 es:"+x);
 document.getElementById("tabla").innerHTML = "<tr><td> n </td><td> n! </td></tr><tr><td>"+num1+ "</td><td>"+ x +"</td></tr>";
 x=1;
 }
 