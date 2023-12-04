const fs = require('fs')
const logger = require('./logger')

const readNumbers = (filepath) => {
  let dataCollection = []
  try {
    const data = fs.readFileSync(filepath, 'utf8')
    dataCollection = data.split('\n').map(Number)
    return dataCollection
  } catch (err) {
    console.error(err)
    return null
  }
}

const readString = (filepath) => {
  let dataCollection = []
  try {
    const data = fs.readFileSync(filepath, 'utf8')
    dataCollection = data.split('\n').map(String)
    return dataCollection
  } catch (err) {
    console.error(err)
    return null
  }
}
const readData = (filepath) => {
  let dataCollection = []
  try {
    const data = fs.readFileSync(filepath, 'utf8')
    dataCollection = data.split('\n')
    return dataCollection
  } catch (err) {
    console.error(err)
    return null
  }
}

const readMap = (filepath) => {
  try {
    const data = fs.readFileSync(filepath, 'utf8')
    const dataCollection = data.split('\n')
    const split = dataCollection.indexOf('')
    const lines = dataCollection.slice(0, split)
    const craneInstructions = dataCollection.slice(split, dataCollection.length)
    const piles = []

    // remove index row
    lines.pop()

    // create piles array
    lines.forEach((row, index) => {
      let cols = row.split('')
      piles[index] = []
      for (let i = 0; i < cols.length; i += 1) {
        if (cols[i] === ' ' && cols[i + 1] === ' ') {
          i += 3
          piles[index].push(0)
        } else if (cols[i] === '[') {
          piles[index].push(cols[i + 1])
        }
      }
    })

    // create map object
    const map = {
      piles: piles[0]
        //rotate array
        .map((_, colIndex) => piles.map((row) => row[colIndex]))
        //remove zeros
        .map((subArr) => subArr.filter((item) => item !== 0)),
      craneInstructions: craneInstructions,
    }

    // remove first item from craneInstructions array
    map.craneInstructions.shift()

    return map
  } catch (err) {
    console.error(err)
    return null
  }
}

module.exports = {
  readNumbers: readNumbers,
  readData: readData,
  readMap: readMap,
  readString: readString,
}
