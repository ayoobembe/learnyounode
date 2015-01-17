var arr = process.argv.slice(2, process.argv.length);
var total = 0;
for ( var i = 0; i < arr.length; i++ ) {
	// console.log(arr[i]);
	total += Number(arr[i]);
}
console.log(total);