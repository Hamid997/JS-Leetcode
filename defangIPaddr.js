/*
Given a valid (IPv4) IP address, return a defanged version of that IP address.

A defanged IP address replaces every period "." with "[.]".
*/

/*
Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"

Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
*/

/*
Constraints:

The given address is a valid IPv4 address.
*/

/**
 * @param {string} address
 * @return {string}
 */


/*
defangIPaddr function with address parameter
for i ind address string
if i === . replace with "[.]"
*/
var defangIPaddr = function (address) {
  let result = "";
  for (let i of address) {
    if (i === ".") {
      result += "[.]";
    } else {
      result += i;
    }
  }
  return result;
};

/* solution with regex:
var defangIPaddr = function (address) {
  return address.replace(/\./g, "[.]");
};
*/

console.log(defangIPaddr("1.1.1.1")); //  "1[.]1[.]1[.]1"
console.log(defangIPaddr("255.100.50.0")); // "255[.]100[.]50[.]0"




