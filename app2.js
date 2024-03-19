let str = prompt("Nhập chuỗi cần kiểm tra:");
let check = false;
let i = 0;
console.log(str[0])

function isPalindrome(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = str.length - (i+1); i < j; j--) {
            if (str[i] == str[j]){
                check  = true;
                break;
            }else{
                check = false;
                break;
            }
        }
    }
return check;
    // if (str[i] == str[str.length -(i+1)]){
    //     check = true;
    // }else {
    //     check = false;
    // }
    // i++;
    // if (i == str.length){
    //     return check;
    // }
    // isPalindrome(str);

}
// debugger
let a = isPalindrome(str);
if (a) {
    console.log("là chuỗi đối xứng")
} else {
    console.log("không phải chuỗi đối xứng")
}