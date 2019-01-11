// Add toString to the dictionary
let dictionary = Object.create(null, {
    toString: { // define toString property
        value() { // the value is a function
            return Object.keys(this).join();
        }
    }
});
// add some data
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__ is a regular property key here
// only apple and __proto__ are in the loop
for (let key in dictionary) {
    alert(key); // "apple", then "__proto__"
}
// your toString in action
alert(dictionary); // "apple,__proto__"