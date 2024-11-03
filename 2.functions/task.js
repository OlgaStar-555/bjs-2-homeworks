function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
    min = min > el ? el : min
    max = max < el ? el : max
    sum += el
  }
  let avg = sum / arr.length
  avg = parseFloat(avg.toFixed(2))

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (!arr.length) return 0

  let sum = 0
  for (const el of arr) {
    sum += el
  }
  return sum
}

function differenceMaxMinWorker(...arr) {
  if (!arr.length) return 0

  let min = Infinity;
  let max = -Infinity;

  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];
    min = Math.min(min, el)
    max = Math.max(max, el)
  }
  return max - min
}

function differenceEvenOddWorker(...arr) { 
  if (!arr.length) return 0

  let sumEvenElement = 0
  let sumOddElement = 0

  for (let index = 0; index < arr.length; index++) {
    const el = arr[index];

    if (el % 2 == 0) {
      sumEvenElement += el
    } else {
      sumOddElement += el
    }
  }
  return sumEvenElement - sumOddElement
}

function averageEvenElementsWorker(...arr) {
  if (!arr.length) return 0
  let sumEvenElement = 0
  let countEvenElement = 0

  for (const el of arr) {
    if (el % 2 == 0) {
      sumEvenElement += el
      countEvenElement++
    } 
  }
  return sumEvenElement / countEvenElement
}

function makeWork(arrOfArr, func) {
  if (!arrOfArr.length) return

  let maxWorkerResult = -Infinity

  for (const arr of arrOfArr) {
    if (!arr.length) continue

    const result = func(...arr)
    if (result > maxWorkerResult) {
      maxWorkerResult = result
    }
  }
  return maxWorkerResult
}
