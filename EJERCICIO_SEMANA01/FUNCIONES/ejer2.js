function evaluarExpresion(expresion){
    const lista = expresion.split(" ")
    let resultado = parseFloat(lista[0]);
    for(let i=1; i<lista.length; i+=2){
        const operador = lista[i];
        const num = parseFloat(lista[i+1])
        if(operador==='+'){
            resultado+=num;
        } else if(operador==='-'){
            resultado-=num;
        } else if(operador==='*'){
            resultado*=num;
        } else {
            resultado/=num
        }
    }
    return resultado;
}
let res = evaluarExpresion("3 + 5 * 2")
console.log(res)