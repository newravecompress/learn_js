// Destructuring assignment
let user = {
    name: "John",
    years: 30
};
let { name, years: age, isAdmin = false } = user;
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false


// The maximal salary
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let max_name = null;
    let max_value = 0;
    for (let [name, value] of Object.entries(salaries)) {
        if (value > max_value) {
            max_value = value;
            max_name = name;
        }
    }
    return max_name;
}
