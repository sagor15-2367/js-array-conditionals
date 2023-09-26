var isGraduated=true;
var salary=40000;
var car=0;
// using one condition
if(isGraduated==true){
    console.log('biye hoye jabe');
}
else{
    console.log('amr kopale biye nai');
}

// using double condition
if(isGraduated==true && salary>50000){
    console.log('biye hoye jabe');
}
else{
    console.log('amr kopale biye nai');
}
// multiple condition
if(isGraduated==true && salary>50000 && car>=1){
    console.log('biye hoye jabe');
}
else{
    console.log('amr kopale biye nai');
}


if(isGraduated==true || salary>50000 || car>=1){
    console.log('Aso biye kori');
}
else{
    console.log('Tomar friend ar mobile number dao');
}