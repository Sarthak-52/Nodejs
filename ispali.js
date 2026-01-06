function ispali(str) {
    str = str.toLowerCase();
    let rev = str.split("").reverse().join("");
    return rev === str ;
}
let str = "hehe";
console.log(ispali(str));