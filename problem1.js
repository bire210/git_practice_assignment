// check prime or not
let num=23;
let c=0;
for(let i=1;i<=num;++i){
    if(num%i==0){
        c++;
    }
}
if(c==2){
    console.log("Yes");
}else{
    console.log("No");
}