"use:strict"
//2. Reverse String
function reverseFunc(string){
	let stringTest = "Hello";
	console.log(stringTest.split("").reverse().join(""));

}

reverseFunc();

//3. Capitalize First Letter of String
function capitalizeFunc(str){

	str = str.toLowerCase().split(' ');			// establishes total lowercase & splits ["hello world"] into ["hello" "world"]

	for (i = 0; i < str.length; i ++) {			//i = each letter
		str[i] = str[i].split('');				//splits ["hello" "world"] into [h,e,l,l,o] [w,o,r,l,d]	
		str[i][0] = str[i][0].toUpperCase(); 	//targets charAt[0] of each string with toUpperCase to create [H,e,l,l,o] [W,o,r,l,d]	
	  	str[i] = str[i].join('');				//joins all characters of each array [Hello World]				
	  }
  console.log(str.join(' '));
}

capitalizeFunc("hello world");

//.string(' '): splits string into an array of substrings& returns new array 
//If empty string ('') is used as the separator, the string is split between each character.

//.split(separator, limit) where:
	//separator:	Optional. Specifies the character, or the regular expression, to use for splitting the string. If omitted, the entire string will be returned (an array with only one item).
	//limit:		Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array.