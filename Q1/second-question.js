function sockMerchant(n, ar) {
  const sockCount = {};
  let pairs = 0;

  // Count the occurrences of each sock color
  for (let i = 0; i < n; i++) {
    const color = ar[i];
    sockCount[color] = (sockCount[color] || 0) + 1;
  }

  // Calculate the number of pairs
  for (const count of Object.values(sockCount)) {
    pairs += Math.floor(count / 2);
  }

  return pairs;
}

const n = 7;
const ar = [1, 2, 2, 1, 1, 3, 1];
const result = sockMerchant(n, ar);
console.log(result); // Output: 3