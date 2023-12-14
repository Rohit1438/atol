let str1 = "abc";

function encode(str) {
    str=str.toLowerCase()

  let arr = [];
  for (let i = 0; i < str.length; i++) {
let number=str.charCodeAt(i) - 'a'.charCodeAt(0) + 1
let opnumber=26-number+1
console.log(number,opnumber);
if(number%2==0){
arr.push(str[i])
arr.push(String.fromCharCode('a'.charCodeAt(0) + opnumber - 1))
}else{
    arr.push(String.fromCharCode('a'.charCodeAt(0) + opnumber - 1))
}
  }
  let ans=arr.join("")
  return ans.toUpperCase();
}

console.log(encode("abc")); 



function decode(str) {
    str=str.toLowerCase()

  let arr = [];
  for (let i = 0; i < str.length; i++) {
let number=str.charCodeAt(i) - 'a'.charCodeAt(0) + 1
let opnumber=26-number+1
console.log(number,opnumber,str[i],String.fromCharCode('a'.charCodeAt(0) + opnumber - 1));
if(number%2==0 && str[i+1]==String.fromCharCode('a'.charCodeAt(0) + opnumber - 1)){
arr.push(str[i])
i++
}
else {
    arr.push(String.fromCharCode('a'.charCodeAt(0) + opnumber - 1))
}



  }
  let ans=arr.join("")
  return ans.toUpperCase();
}

console.log(decode("ZBYX")); 




