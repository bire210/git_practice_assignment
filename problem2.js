// String is palindrome or not
let str="naman";
let nstr="";
for(let i=0;i<str.length;++i){
    nstr=nstr+str[i];
}
if(str==nstr){
    console.log("Yes");
}else{
    console.log("No");
}