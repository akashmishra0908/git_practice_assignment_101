function prime_number(Num){
let fac=0;
for(i=0;i<=Num;i++){
if(Num%i==0){
fac++;
}
}
if(fac==2){
return true;
}
return false;
}
let ans=prime_number(13);
if(ans==true){
console.log("Prime")
}
else{
console.log("Not Prime")
}