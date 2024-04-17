const originalCloudArray = [0, 0, 1, 0, 0, 1, 0,0,0]
const c = originalCloudArray
 //let jumpTracker = []


function jumpingOnClouds(c) {

  let jumpCounter = 0
 
  // Write your code here
 for (let i=0; i<c.length ; i++) {

   // look 2 ahead, if its bad, jump one 
   // if you can jump 2 safely, pop the baddy out of the array and return



   if (c[i+2] === 1 || c[i+2] === undefined) {
    jumpCounter ++
    //jumpTracker.push("one")
  } 

    else if (c[i+2] === 0) {
      c.splice(i+1, 1)
      jumpCounter ++ 
     // jumpTracker.push("two")
 
  }
}

  let result = jumpCounter - 1
  return result
}

console.log(jumpingOnClouds(c))
//console.log(jumpTracker)