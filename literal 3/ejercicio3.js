
function calcular(){
    
    num1 = Number(document.getElementById('ingresos').value);
    num2 = Number(document.getElementById('egresos').value);
    var disponible  = num1-num2;
    alert("sueldo diponible:"+disponible);
}