function nomeListado(nome){
if(lista.includes(nome)){
    console.log(`o nome ${nome} está na lista`);
}else{
    console.log("nao encontrado");
}
}
const lista=["nias","tiago","jojo"];
nomeListado("nias");