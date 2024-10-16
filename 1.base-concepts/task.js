"use strict"
const PERCENTS = 100
const MONTHS = 12

function solveEquation(a, b, c) {
  const arr = []

  const d = Math.pow(b, 2) - 4 * a * c

  if (d > 0) {
    arr[0] = (-b + Math.sqrt(d)) / (2 * a)
    arr[1] = (-b - Math.sqrt(d)) / (2 * a)
    return arr
  }
  if (d === 0) {
    arr[0] = (-b / (2 * a))
    return arr
  }
  return arr
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = percent / PERCENTS / MONTHS
  const remainder = amount - contribution

  const payment = remainder * (percent + (percent / (((1 + percent)**countMonths) - 1)))

  return parseFloat((payment * countMonths).toFixed(2))
}