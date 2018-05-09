// Reverses a string
function palindrome(string) {
  let reverse_string = string.split("").reverse().join("").toLowerCase();
  return string === reverse_string;
}
