let hikeLength = 10
let stepArray = "UUUDDDDDUU"
const steps = hikeLength
const path = stepArray
//et altitudeArray = []
// break step array into strings
function countingValleys(steps, path) {
 
    let valleyCount = 0
    let stepArray = path.split('')
    let altitude = 0
    let inAValley = false
    

    for (let i = 0; i < steps; i++) {

      if (stepArray[i] === 'D') {

        if (altitude === 0) { inAValley = true }

          altitude--
         // altitudeArray.push(altitude)

          // if (stepArray[i+1] === 'U') {
          //  valleyCount++
          }
      
        if (stepArray[i] === 'U') {
          altitude++
         // altitudeArray.push(altitude)

          if (altitude === 0 && inAValley === true) {
            valleyCount++
            inAValley = false
          }


        //if (altitude == 0 && stepArray[i+1] === 'D') {
        //  valleyCount++
        }
      }

    
    return valleyCount

}

const result = countingValleys(steps, path);
console.log(result);
console.log(altitudeArray)
