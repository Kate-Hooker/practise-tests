let n = 7
let ar = [1, 2, 2, 1, 1, 3, 1, 4, 4]
let lengthOfSockArray = n
let pairs = 0

function sockMerchant(n, ar) {
  const sortedBySockColour = []
  const sockArray = [...ar]

  while (sockArray.length > 0) {
    const currentColour = sockArray[0]
    const matchingSocksGrouped = [currentColour]

    for (let i = 1; i < sockArray.length; i++) {
      if (sockArray[i] === currentColour) {
        matchingSocksGrouped.push(sockArray[i])
        sockArray.splice(i, 1)
        i--
      }
    }

    sortedBySockColour.push(matchingSocksGrouped)
    sockArray.shift()
  }

  //console.log(sortedBySockColour);

  function getSubArrayLengths(arr) {
    return arr.map((subArr) => [subArr.length])
  }

  const subArrayLengths = getSubArrayLengths(sortedBySockColour)
  //console.log(subArrayLengths);

  for (let i = 0; i < subArrayLengths.length; i++) {
    const length = subArrayLengths[i][0]
    pairs += Math.floor(length / 2)
  }

  return pairs
}
//function isInteger(value) {
//  return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
//}

const result = sockMerchant(n, ar)
// console.log(isInteger(result));
console.log(pairs)
//sockMerchant(n, ar);
