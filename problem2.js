
// String is palindrome or not
let str="naman";
let nstr="";
for(let i=str.length-1; i>=0; i--){
    nstr=nstr+str[i];
}
if(str==nstr){
    console.log("Yes");
}else{
    console.log("No");
}