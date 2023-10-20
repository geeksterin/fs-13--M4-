
function reverse(str){
    let rev_str = "";
    for(let i=str.length-1; i>=0; i--){
        rev_str += str[i];
    }
    return rev_str;
}

let str = "abc";
let revrse_str = reverse(str);
console.log(revrse_str);


const reverseString = (s) => {
	res = s.split('')
// res = ['r','i',]
	let left = 0
	let right = s.length - 1

	while (left < right) {
		let temp = res[left]
		res[left] = res[right]
		res[right] = temp

		left++
		right--
	}

	return res.join('')
}
revrse_str = reverseString(str);
console.log(revrse_str);