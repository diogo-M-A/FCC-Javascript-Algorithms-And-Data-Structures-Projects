function palindrome(str) {
  //preparing the input string
  var regex = /[^A-Za-z0-9]/gi;
  str = str.replace(regex, '')
  str = str.toLowerCase()
  console.log(str)

  //creating the reverse string
  let reverse = []
  for(let i=str.length-1; i>=0; i--){
    reverse.push(str[i])
  }
  reverse = reverse.join("")
  reverse = reverse.replace(regex, '')
  
  //comparing the string to return a boolean value
  console.log(reverse)
  return reverse === str;
}

console.log(palindrome("A man, a plan, a canal. Panama"));