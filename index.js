const tableDigits = () => {
  return table = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
};

function intToRoman(numbers) {
  if (numbers === '' || !numbers) {
    throw Error('Function called with no value');
  } else if (typeof(numbers) !== 'number') {
    throw Error('Type only numbers');
  } else if (numbers < 1 || numbers > 3999) {
    throw Error('Only numbers between 1 and 3999');
  } else {
    return searchRoman(numbers);
  }
}

const searchRoman = (numInput) => {
  const obj = tableDigits();
  let num = numInput;
  let romanDigit = '';

  for (let key in obj) {
    while (num >= obj[key]) {
      romanDigit += key;
      num -= obj[key];
    }
  }

  return romanDigit;
};

function romanToInt(strRoman) {
  if (strRoman === '' || !strRoman) {
    throw Error('Function called with no value');
  } else if (typeof(strRoman) !== 'string') {
    throw Error('Type a string');
  } else {
    return searchNumber(strRoman);
  }
}

const searchNumber = (strInput) => {
  const obj = tableDigits();
  let str = strInput.toUpperCase();
  let numberDigit = 0;

  for (let key in obj) {
    while (str.indexOf(key) === 0) {
      numberDigit += obj[key];
      str = str.slice(1);
    }
  }

  if (str.length > 0) {
    throw Error('Is not a valid roman number');
  } else {
    return numberDigit;
  }
};


module.exports.intToRoman = intToRoman;
module.exports.romanToInt = romanToInt;