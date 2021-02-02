const students = [
    {id: 1, name : "Sunny"},
    {id: 2, name : "Manna"},
    {id: 3, name : "Moyouri"},
    {id: 4, name : "Dipjol"}
]
const sName = students.map(s => s.name);
const sId = students.map(s => s.id)
const bigId = students.filter(s => s.id > 2);
const oneId = students.find(s => s.id > 2);
console.log(oneId);
