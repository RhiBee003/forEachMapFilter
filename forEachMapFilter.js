//forEach

function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(val){
      newArr.push(val * 2);
    });
    return newArr;
  }

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val){
      if (val % 2 === 0) {
        newArr.push(val);
      }
    });
    return newArr;
  }

function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(val){
      newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
  }

function addKeyAndValue(arr, key, value){
    arr.forEach(function(val){
      val[key] = value;
    });
    return arr;
  }

function vowelCount(str){
    let splitArr = str.split("");
    let obj = [];
    const vowels = "aeiou";
  
    splitArr.forEach(function(let){
      let lowerCasedLet = let.toLowerCase();
      if (vowels.indexOf(lowerCasedLet) !== -1){
        if (obj[lowerCasedLet]){
          obj[lowerCasedLet]++;
        }else{
          obj[lowerCasedLet] = 1;
        }
      }
    });
    return obj;
  }

//map

function doubleValuesWithMap(arr){
    return arr.map(function(val){
      return val * 2;
    });
  }
  
function valTimesIndex(arr){
    return arr.map(function(val, idex){
      return val * idex;
    });
  }
  
function extractKey(arr, key){
    return arr.map(function(val){
      return val[key];
    });
  }
  
function extractFullName(arr){
    return arr.map(function(val){
      return val.first + " " + val.last;
    });
  }

//filter

function filterByValue(arr, key) {
    return arr.filter(function(val){
      return val[key] !== undefined;
    });
  }
  
  //ask abt/look into searchValue

  function find(arr, searchValue){
    return arr.filter(function(val){
      return val === searchValue;
    })[0];
  }
  
  function findInObj(arr, key, searchValue) {
    return arr.filter(function(val){
      return val[key] === searchValue;
    })[0];
  }
  
  function removeVowels(str){
    const vowels = "aeiou";
        return str
      .toLowerCase()
      .split("")
      .filter(function(val){
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }
  
  function doubleOddNumbers(arr){
        return arr
      .filter(function(val){
        return val % 2 !== 0;
      })
      .map(function(val){
        return val * 2;
      });
    }