function prime_number(N){
let count=0;
for(i=0;i<=N;i++){
if(N%i==0){
count++;
}
}
if(count==2){
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