// Filter unique array members
function unique(arr) {
    return Array.from(new Set(arr));
}
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
// alert(unique(values)); // Hare, Krishna, :-


// Filter anagrams
function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        // split the word by letters, sort them and join back
        let sorted = word.toLowerCase().split('').sort().join(''); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
// alert(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"


// Store "unread" flags
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

// two messages have been read
readMessages.add(messages[0]);
readMessages.add(messages[1]);
// readMessages has 2 elements

// ...let's read the first message again!
readMessages.add(messages[0]);
// readMessages still has 2 unique elements

// answer: was the message[0] read?
alert("Read message 0: " + readMessages.has(messages[0])); // true

messages.shift();
// now readMessages has 1 element (technically memory may be cleaned later)


// Store read dates
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));
// Date object we'll study later