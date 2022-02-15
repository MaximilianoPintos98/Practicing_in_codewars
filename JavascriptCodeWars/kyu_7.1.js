function likes(names) {
  var namesLength = names.length
  var othersNames = names.slice(2, ).length
  var result = namesLength === 0 ? 'no one likes this' :
    namesLength === 1 ? `${names[0]} likes this` :
    namesLength === 2 ? `${names[0]} and ${names[1]} like this` : 
    namesLength === 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this` : 
    namesLength >= 4 ? `${names[0]}, ${names[1]} and ${othersNames} others like this` : ''
  return result
}

likes(['maxi', 'peter', 'juli', 'parker', 'hernesto'])