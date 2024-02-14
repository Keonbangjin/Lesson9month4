//9-dars//

//1//

let arr = [55, 3, 2, 11, 3, 4, 6, 7, 12];

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let osish = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = osish;
        }
    }
}

console.log(arr); 

//3//
function birxilArray(arr) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
          newArr.push(arr[i]);
      }
  }
  
  return newArr;
}

let inputArray = [2,4,5,6,6,3,2,1];
let outputArray = birxilArray(inputArray);
console.log(outputArray); 



//5//

function myArray(arr) {
  const birinchielement = arr[0];

  arr.forEach((element, index, array) => {
      if (index !== array.length - 1) {
          array[index] = array[index + 1];
      }
  });

  arr[arr.length - 1] = birinchielement;
  
  return arr;
}

let inputArray = [1, 5, 8, 9, 10];
let outputArray = myArray(inputArray);

console.log(outputArray); 

//6//

function rArray(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      let osish = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = osish;
  }
  
  return arr;
}

let numbers = [1, 2, 3, 4, 5];
let rNumbers = rArray(numbers);
console.log(rNumbers); 


//7//

let numbers = [5, 4, 36, 7, 8, 3, 2, 9, 6, 1];

let toqNumbers = numbers.filter(number => number % 2 !== 0);

console.log(toqNumbers); 

//8//

let numbers = [2, 3, 4, 5, 7];

let toqindexson = numbers.filter((_, index) => index % 2 !== 0);

console.log(toqindexson); 


//9//
let numbers = [3, 6, 9, 2, 5, 8, 11, 4, 7];

function engArray(arr) {
  if (arr.length === 0) {
    return undefined; 
  }

  let engkattaqiymat = arr[0]; 

  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] > engkattaqiymat) {
      engkattaqiymat = arr[i];
    }
  }

  return engkattaqiymat;
}

let result = engArray(numbers);
console.log(result);


//10//
let inputArray = [2, 1, 3, 8, 4];
function myArr(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let maxIn = arr.indexOf(max);
  let minIn = arr.indexOf(min);

  let start = Math.min(maxIn, minIn);
  let end = Math.max(maxIn, minIn);

  arr.forEach((value, index) => {
      if (index > start && index < end) {
          arr[index] = 0;
      }
  });

  return arr;
}


let outputArray = myArr(inputArray);
console.log(outputArray); 


//11//

let n = 5;
function myArr(n) {
  let oddNum = [];
  let count = 0;
  let i = 1;

  while (count < n) {
      if (i % 2 !== 0) {
          oddNum.push(i);
          count++;
      }
      i++;
  }

  return oddNum;
}


let firstoddNum = myArr(n);
console.log(firstoddNum); 


//12//
let inputArray = [22, 3, 5, 6, 3, 2, 3];

function myArray(arr) {
  const rArray = [];
  
  arr.forEach((element, index) => {
      rArray[arr.length - index - 1] = element;
  });
  
  return rArray;
}

let outputArray = myArray(inputArray);
console.log(outputArray); 


//13//
let inputArray = [3, 5, 6, 3, 2, 3];
function Array0(arr) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
      if (newArr.indexOf(arr[i]) === -1) {
          newArr.push(arr[i]);
      }
  }
  
  return newArr;
}

let outputArray = Array0(inputArray);
console.log(outputArray); 


//14//
let inputArray = [8, 4, 2, 7, 5, 3, 1];
function getArray(arr) {
  let engkichik = Infinity; 
  for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] < engkichik) {
          engkichik = arr[i];
      }
  }

  return engkichik;
}

let engkichik = getArray(inputArray);
console.log(engkichik); 
