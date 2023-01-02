function convertToRoman(num) {
  var roman = []

  while(num > 999){
    num = num - 1000
    roman.push('M')
  }

  while(num > 899){
    num = num - 900
    roman.push('CM')
  }

  while(num > 499){
    num = num - 500
    roman.push('D')
  }

  while(num > 399){
    num = num - 400
    roman.push('CD')
  }

  while(num > 99){
    num = num - 100
    roman.push('C')
  }

  while(num > 89){
    num = num - 90
    roman.push('XC')
  }

  while(num > 49){
    num = num - 50
    roman.push('L')
  }

  while(num > 39){
    num = num - 40
    roman.push('XL')
  }

  while(num > 9){
    num = num - 10
    roman.push('X')
  }

  while(num > 8){
    num = num - 9
    roman.push('IX')
  }

  while(num > 4){
    num = num - 5
    roman.push('V')
  }

  while(num > 3){
    num = num - 4
    roman.push('IV')
  }

  while(num > 0){
    num = num - 1
    roman.push('I')
  }
//console.log(num)
 return roman.join('');
}

console.log(convertToRoman(3999));