function is_palindrome(str){
    let s=0,e=str.length-1;
    while( s<=e ){
        if( str[s]===str[e] ){
            s += 1;
            e -= 1;
        }else
            return false;
    }
    return true;
}

let is_palin = is_palindrome("abac");
console.log(is_palin);