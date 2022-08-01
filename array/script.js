//array method
/*const array = [2, 4, 6, 2, 9, 10, 5];
console.log(array) //it shows array
console.log(array[5])
console.log(array[array.length - 1]) //if you want last vale of array

//Array  basic oprations (for remove and add)
//push (it add last element)
console.log(array.push(12))

//unshift (it add begining elements)
console.log(array.unshift(1))

//pop (it remove last elements)
console.log(array.pop())

//shift (it remove first element)
console.log(array.shift())*/


//Index of (it shows index number)
/*const names = ['yash', 'aarya', 'aklesha', 'ranjana', 'viraj', 'ajay', 'ranjana']
console.log(names.indexOf('ranjana'))


console.log(names.indexOf('ranjana', 4))//(this method is used for to get same element)

//lastindexof
console.log(names.lastIndexOf('ranjana'))

//includes (it shows array inculdes name /number/string /object or not)
console.log(names.includes('aklesha')) //(if it there it shows true)

console.log(names.includes('akshata')) //(it not there it shows false)

//Find function
const info = [
    {
        collage: 'bal-bharti collage',
        students: 5000
    },
    {
        collage: 'ghokhle collage',
        students: 20000
    },
    {
        collage: 'dhanukar collage',
        students: 40000
    }
];
//simple function in find method
console.log(info.find(function (element) {
    return element.collage === 'bal-bharti collage'
})
)

//arrow function in find method
console.log(info.find(element => element.students === 40000))*/

//Concat Method
/*let fruits1 = ['mango', 'apple', 'cherry']
let fruits2 = ['pineapple', 'banana', 'jackfruit']
console.log(fruits1.concat('gava')) // it add names
console.log(fruits1.concat(fruits2)) //it add array also

//slice Method( removes which index no show in colum )
//let fruits3 = fruits1.concat(fruits2)
//console.log(fruits3.slice(3, 5))
 
//Spread Method (it connect arrays)
//let fruits5 = [...fruits1, ...fruits2] //name can be written
let fruits4 = [...'mango', 'apple', 'cherry',...'pineapple', 'banana', 'jackfruit']*/


//Loops
//For loop
/*for (let i = 0; i < 10; i++){
    console.log('hellow world')
}

for (let i = 4; i < 41; i = i + 4){
    console.log(i)
}

for (let i = 180; i > 7; i = i - 18){
    console.log(i)
}

for (let i = 0; i < 10; i++){
    if (i % 2 == 0)
        console.log(i)
}

for (let i = 0; i < 20; i++){
    if (i % 2 != 0)
        console.log(i)
}

//while loop
let i = 8;
while (i <81) {
    console.log(i)
   i= i+8
}

//for....in
//objects
let fc = {
    animal: "lion",
    leg: 4
};
for (let key in fc) {
    console.log(key, fc[key])
}

//array
let friends = ['rahul', 'neeta', 'geeta', 'yash'];
for (let index of friends) {
    console.log(index, friends[index])
}*/


//FUNCTIONS
/*function myFirstFunction() {
    console.log('my name is akshata')
}
//calling/Invoking/running Function
myFirstFunction()


const arr = [" jan", " feb", "march", " april", "may", "june", "july", "august", "sep", "oct", "nov", "dec"];

console.log("welcome" + arr)


for (let i = 1; i < 10; i = i+1){
    console.log("i")
};*/

for (let i = 4; i < 41; i = i + 4){
    console.log(i)
}

for (let i = 11; i <= 20; i++){
    console.log(i)
}

for(var a=5; a >= 0; a--){
    for(var b=1; b <= a; b++){
       console.log(b + " ")
    }
   console.log("<br>")
}