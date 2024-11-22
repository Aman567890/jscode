// Function to find even numbers in an array using a for loop
function findEvenNumbers(arr) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }
    return evenNumbers;
  }
  
  // Function to find odd numbers in an array using a for loop
  function findOddNumbers(arr) {
    const oddNumbers = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        oddNumbers.push(arr[i]);
      }
    }
    return oddNumbers;
  }
  
  // Function to print a pyramid pattern using a for loop
  function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
      let spaces = " ".repeat(rows - i);
      let stars = "*".repeat(2 * i - 1);
      console.log(spaces + stars);
    }
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("Even Numbers:", findEvenNumbers(numbers));
  console.log("Odd Numbers:", findOddNumbers(numbers));
  printPattern(5);
  