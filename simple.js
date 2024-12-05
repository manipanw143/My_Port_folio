
// function my (){
    
//     var b = 10;
//     console.log(b);

// }
// my()
// console.log(b);




// function my (){
    
//     var b = 10;
//     console.log(b);

// }


// function second () {
//     my()
// }

// second()



// console.log(a);

// let a;
// var b = 100;


// const x = 10;
// {
//     const x = 100;
//     console.log(x)
// }console.log(x);


// var y = 10;
// {
//     var y = 100;
//     console.log(y);
// }
// console.log(y)


// var y = 10;
// {
//     let y = 100;
//     console.log(y);
// }
// console.log(y)


// let y = 10;
// {
//     var y = 100;
//     console.log(y);
// }
// console.log(y)




// var a = 10;
// var a = 100;
// console.log(a);


// let a = 10;
// let a = 100;
// console.log(a);

// var b = 1;
// var b =2;
// console.log(b)




// function x(){
//    var a = 10;
//     // console.log(a)
//     y()
//     function y(){
//         console.log(a);
//     }
// }

// x();




// function example(funct){
//     console.log("example")
//     funct();
// }
// example(anotherfunc);


// function anotherfunc(){
//     console.log("another funct");
// }




// console.log("start");


// function cb () {
//     console.log("call back")
// }

// setTimeout(cb, 0);

// console.log("end")





// function x() {

// }


// function y(x){
// return x;
// }






// const arr = [5,1,3,2,6];

// const output = arr.reduce(function (accu, curr){
//    if(curr>accu){
//     accu = curr;
//    }
//    return accu;
// },0)

// console.log(output);




const users = [
    {firstName: "akshay", lastName: "saini", age:26},
    {firstName: "donay", lastName: "juwail", age:75},
    {firstName: "diwany", lastName: "renma", age:50},
    {firstName: "akshay", lastName: "saini", age:26},
]

// const output = users.filter((person) => person.age>26)

// console.log(output)


// const secondoutput = users.reduce(function (accu,curr){
//  if(accu[curr.age]){
//     accu[curr.age] = ++accu[curr.age];
//  }
//  else{
//     accu[curr.age] = 1;
//  }return accu;
// },{})

// console.log(secondoutput)



// const output = users.filter((person) => person.age<30).map((x) => x.firstName);
// console.log(output)


// const array = [1,2,3,4];
// const output = array.map((x) => x*2)
// console.log(output);


// const array = [
//     {"firstName":"Harish", "LastName": "Mu", "age":"52"},
//     {"firstName":"Dinesh", "LastName": "Ra", "age":"46"},
// ]

// console.log(array);

// const output = array.map(function(x){

// return x.firstName
// })

// console.log(output);



// const array = [1,2,3,4,5,6,8];

// const EvenArray = array.filter(function(x){
// if(x % 2 ===0)
// return x;
// })

// console.log(EvenArray);



// const arrar = [4,2,3,8];

// const output = arrar.reduce(function(accu,curr){
// if(curr < accu){
// accu = curr;
// }
// return accu;
// },Infinity)

// console.log(output)


// 1 :

// function cb(x){
// return x*2;
// }

// const array = [1,2,3,4,5];

// const output = array.map(cb)

// console.log(output);



// 2 :

// filter method is used to filter the aray with condition


// const array = [2,4,3,1,8];

// const EvenVales = array.filter(function(curr){
// if(curr % 2 === 0 ){
// return curr;
// }
// })

// console.log(EvenVales);





// 3 reduce

// const array = [1,9,4,2];

// const Maximum = array.reduce(function (acc, curr, index, array) {
// return curr > acc ? curr : acc;
// }, -Infinity)

// console.log(Maximum)



// const array = [1,9,0,4,2];

// const Minimum = array.reduce(function (acc, curr, index, array) {
// return curr < acc ? curr : acc;
// }, Infinity)

// console.log(Minimum)




// function hello(name){
//     return `Hello, ${name}!`;
// }


// function processUserInput(callback){
//   const name = "Alice";
//   return callback(name);
// }

// const output = processUserInput(hello);
// console.log(output);


// let a = 9
// var a = 10

// console.log(a)


// const a = 4;
// const b;
// const b = 4;

// let a = 10;
// // console.log(a)
// {
//     var a = 4;
//     console.log(a)
// }



// console.log(b);



// let obj = {

// }

// obj();

// const a;
// a = 4;


// let a;
// a = 4;





function a(){
    function b(){   
    }
}

let b = () => {
    
}