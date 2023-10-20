function anagram_check(str1,str2){
    let obj = {};
    for(let i=0 ; i<str1.length ; i++){
        if( undefined===obj[str1[i]] )  obj[str1[i]] = 1;
        else obj[str1[i]] += 1;
    }
    let obj2 = {};
    for(let i=0 ; i<str2.length ; i++){
        if( undefined!==obj[str2[i]] )
            obj[str2[i]] -= 1;
        else
            return false;
        if( 0===obj[str2[i]] ) delete obj[str2[i]];
    }
    
    return Object.keys(obj).length===0;
}
console.log( anagram_check("abc","abc") );