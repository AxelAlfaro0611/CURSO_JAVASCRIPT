//LOS CONDICIONALES PERMITEN EJECUTAR CÓDIGO BASADO EN UNA CONDICIÓN

/*
1. Condicional if - else if - else
El siguiente código imprime "Buenas tardes"
porque la variable hora tiene un valor de 14,
que es menor que 18 pero mayor o igual que 12.
*/

let hora = 14;

if (hora < 12) {
    console.log("Buenos días")
}else if (hora < 18) {
    console.log("Buenas tardes")
}else {
    console.log("Buenas noches")
}