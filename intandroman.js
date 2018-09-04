const tableDigits = () => {
  const table = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  }

  return table
}

function intToRoman(numbers) {
  if (numbers == "" || !numbers) {
    throw Error("Function called with no value")
  } else if (typeof(numbers) != "number") {
    throw Error("Type only numbers")
  } else {
    return searchRoman(numbers)
  }
}

const searchRoman = (num) => {
  const obj = tableDigits()

  var romanDigit = ""
  for (let key in obj) {
    while (num >= obj[key]) {
      romanDigit += key
      num -= obj[key]
    }
  }

  return romanDigit
}

function romanToInt(strRoman) {
    if (strRoman == "" || !strRoman) {
    throw Error("Function called with no value")
  } else if (typeof(strRoman) != "string") {
    throw Error("Type a string with '' ")
  } else {
    return searchNumber(strRoman)
  }
}

const searchNumber = (str) => {
  const obj = tableDigits()

  var numberDigit = 0
  for (let key in obj) {
    while (str.indexOf(key) == 0) {
      numberDigit += obj[key]
      str = str.slice(1)
    }
  }

  if(str.length > 0) {
    throw Error("Is not a valid roman number")
  } else {
    return numberDigit
  }
}
