// Превратите объект в JSON
var leader = {
    name: "Василий Иванович",
    age: 35
};

// let str = JSON.stringify(leader);
// console.log(str);
// let newObj = JSON.parse(str);
// console.log(newObj);


// Превратите объекты со ссылками в JSON
var leader = {
    name: "Василий Иванович"
};

var soldier = {
    name: "Петька"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

// let teamStr = JSON.stringify(team, (k, v) => { 
//     console.log(k); 
//     console.log(v);

//     var type = {}.toString.call(v).slice(8, -1);
//     if (type == 'Object') {
//         return v["name"];
//     }
//     return v
// }); 

let teamStr = JSON.stringify(team, ['name']);

console.log(teamStr);

// Еще вариант
let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{ name: "John" }, { name: "Alice" }],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));

/*
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/