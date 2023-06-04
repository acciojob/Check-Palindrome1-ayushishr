// complete the given function

function palindrome(str){

	str = str.toLowerCase();
	let string = str.split(" ").join('')
	let arr=string.split('');
	let i=0;j=arr.length-1;

	while(i<j){
		if(arr[i] !== arr[j]){
			return false;
		}
		i++;
		j--;
	}
	return true;
}
module.exports = palindrome
