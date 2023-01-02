function rot13(str) {
  str = str.split('')
  let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  for(let i = 0; i<str.length; i++){
    for(let j = 0; j<alphabet.length; j++){
      if(str[i] == alphabet[j]){
        if(alphabet[j + 13] === undefined){
          let slice = alphabet.slice(j)
          let index = 13-slice.length
          str[i]= alphabet[0 + index]
        }else{
          j = j+13
          str[i] = alphabet[j]
        }
      }
    }
  }
  str = str.join('')
  return str;
}

console.log(rot13("SERR PBQR PNZC"));