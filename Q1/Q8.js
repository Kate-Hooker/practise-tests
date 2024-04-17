
let d = "5 4"
let a = [1, 2, 3, 4, 5]
let lengthAndRotations




function rotLeft(a, d) {
  let lengthAndRotations = d.split('')
 
  for (let i = 0; i < lengthAndRotations.length; i++) {
    if (lengthAndRotations[i] === ' ') {
      lengthAndRotations.shift()
      lengthAndRotations.shift()
      break}
    else {lengthAndRotations.shift()}
    
  }
 
  let rotationsArray = parseInt(lengthAndRotations.join(''))
  let rotations = rotationsArray[0]


  //let numbersRemovedFromEnd = a.slice(a.length - rotations, a.length)
  //while (rotations > 0) {
  //  a.pop()
  //  d--
 // }
 
  //let finalArray = numbersRemovedFromEnd.concat(a)

 
  return rotations

}

let result =rotLeft(a, d)
//console.log(finalArray)
console.log(result)