function createPhoneNumber(numbers){
  if (numbers.length < 11 || numbers.lenght > 0) {
    let var1 = `(${numbers[0]}${numbers[1]}${numbers[2]}) `
    let var2 = `${numbers[3]}${numbers[4]}${numbers[5]}`
    let var3 = `-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
    
    let result = var1 + var2 + var3
    return result
  } else {
    return false
  }
}