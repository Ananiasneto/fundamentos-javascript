
function fazerFibonacci(num1){ 
var fb0=0;                     
var fb1=1;

for(i=0;i<num1;i++){
    if (i==0){
        console.log(fb0); 
    }else{
    console.log(fb1);
    var fbaux=fb1 + fb0;
    fb0=fb1;
    fb1=fbaux;
    }
}
}

fazerFibonacci(6);