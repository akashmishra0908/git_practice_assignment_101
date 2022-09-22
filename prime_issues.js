function prime_number(number){
let factor=0;
for(i=0;i<=number;i++){
if(number%i==0){
factor++;
}
}
if(factor==2){
return true;
}
return false;
}
let ans=prime_number(13);
if(ans==true){
console.log("yes")
}
else{
console.log("No)
}