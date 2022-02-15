// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final
// pair with an underscore ('_').

function solution(str){
  return (str+"_").match(/.{2}/g)||[]
}