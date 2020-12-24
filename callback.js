function calculateSquare(number, callback) {
  setTimeout(() => {
    const result = number * number;
    callback(result);
  }, 1000);
}
let callback = (result) => {
  console.log("Result from calculateSquare: " + result);
};
calculateSquare(2, callback);
