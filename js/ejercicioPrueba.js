
let num=5;

function verificarPrimo(num) {
    for(let i=2;i<num;i++){
        if(num%i==0){
            return "no es Primo";
        }
    }
    return "es Primo";
}
console.log(verificarPrimo(num));