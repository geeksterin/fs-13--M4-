function string_compression(str){
    if( ""===str )  return "";

    let prevChar = str.charAt(0);
    let frq = 1;
    let ans = "";
    for(let i=1 ; i<str.length ; i++){
        if( prevChar===str.charAt(i) )  frq += 1;
        else{
            ans += prevChar;
            ans += frq;
            frq = 1;
            prevChar = str.charAt(i);
        }
    }
    ans += prevChar;
    ans += frq;
    return ans;
}
console.log( string_compression("aabbbcccddaaag") );
console.log( string_compression("") );