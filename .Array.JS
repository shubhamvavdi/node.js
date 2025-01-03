//foreach with anonymous function

// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function(num) {
//   console.log(num * 2); // દરેક એરેના તત્વને 2થી ગુણિત કરશે
// });


//. filter Example
//filter() એrrayમાંથી ચોક્કસ કંડિશન્સ મુજબ તત્વોને ફિલ્ટર કરે છે.


// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4, 6]


// 3. filter Example
// filter() એrrayમાંથી ચોક્કસ કંડિશન્સ મુજબ તત્વોને ફિલ્ટર કરે છે.

// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4, 6]


// 4. find Example
// find() એrrayમાંથી પ્રથમ એવું તત્વ શોધે છે જે કંડિશન પર ખરો થાય.

// let numbers = [1, 2, 3, 4, 5];
// let found = numbers.find(num => num > 3);
// console.log(found); // 4 (આજે તે પહેલું તત્વ છે જે 3 થી મોટું છે)
                                                 
                                                                              // 2.Object

// 1. Simple Object

// let car = {
//     brand: 'Toyota',
//     model: 'Corolla',
//     year: 2020,
//     drive: function() {
//       console.log('Driving the car...');
//     }
//   };
//   console.log(car.brand);  // 'Toyota'
//   car.drive();             // 'Driving the car...'
  
// 2. Freeze Object
// Object.freeze() એ)objectને મૂલ્ય સાથે એકવાર ઘનિષ્ઠ બનાવે છે, તેથી તેની સ્થિતિ બદલી શકતા નથી.

// let car = {
//     brand: 'Toyota',
//     model: 'Corolla',
//     year: 2020
//   };
  
//   Object.freeze(car);
  
//   car.year = 2021;  // આ બદલાવ ન થશે
//   console.log(car.year); // 2020
  
// 3. Function Length - Object
// JavaScript એફકશન્સની length પ્રોપર્ટી એ દર્શાવે છે કે ફંક્શન કેટલી આર્ગ્યુમેન્ટ્સ લે છે.

// function example(a, b, c) {
//     console.log(a + b + c);
//   }
  
//   console.log(example.length); // 3 (આ ફંક્શન 3 પરામિતિઓ લે છે)
  

// .Function

// 1. 4 Types of Functions in JavaScript
// JavaScript માં ચાર મુખ્ય પ્રકારના ફંક્શન હોય છે:

// Simple Function (Traditional Function)

// function add(a, b) {
//     return a + b;
//   }
//   console.log(add(3, 4)); // 7

  
  
  
// Arrow Function એરો ફંક્શન (ES6) એટર્ન ફંક્શનને ટૂંકી રીતે લખવાનો એક રીત છે. this કીવર્ડનો વર્તાવ અલગ હોય છે.

// javascript
// Copy code

// const add = (a, b) => a + b;
// console.log(add(3, 4)); // 7

// Anonymous Function અનામિક ફંક્શન એ એવી ફંક્શન છે જે નામ વગર છે, અને તેને વ્યાખ્યાયિત કરવામાં આવશે અને તરત જ કાર્ય કરવામાં આવશે.


// const multiply = function(a, b) {
//     return a * b;
//   };
//   console.log(multiply(2, 3)); // 6
  

// 2. Simple Function Example

// function greet(name) {
//     console.log('Hello, ' + name);
//   }
  
//   greet('John'); // Hello, John


// 3. Arrow Function Example

// const greet = (name) => {
//     console.log('Hello, ' + name);
//   };
  
//   greet('John'); // Hello, John
  

// 4. Anonymous Function Example

// setTimeout(function() {
//     console.log('This is an anonymous function!');
//   }, 1000);
                                                                        // .Async/Await
                                                                        // -Api Calling
                                                                        // -Sync/Async

//                                                                         1. Async/Await - API Calling Example
// async અને await એ JavaScript માં અસિંક્રોનસ ઓપરેશનને સરળ બનાવે છે. async ફંક્શન એ પ્રોમિસને સંભાળી શકે છે, અને await એ પ્રોમિસને પુર્ણ થાય તે પહેલા બ્લોકને રોકે છે.
// API calling with async/await

// async function fetchData() {
//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log('Error:', error);
//     }
//   }
  
//   fetchData();
// આ ઉદાહરણમાં:

// fetchData() એ async ફંક્શન છે.
// await વપરાય છે API response માટે, જે પ્રોમિસ પરિપૂર્ણ થાય છે.
// API પ્રતિક્રિયા JSON સ્વરૂપે બદલવામાં આવે છે અને કન્સોલમાં છાપાય છે.

// 2. Sync/Async Comparison
// Sync Function: જ્યારે ફંક્શન સિનક્રોનસ હોય છે, ત્યારે એ આગલા ઓપરેશનને પૂર્ણ થવા માટે રાહ જોઈને કાર્ય કરે છે.


// function syncFunction() {
//     console.log('Step 1');
//     console.log('Step 2');
//   }
  
//   syncFunction();
//   // Output:
//   // Step 1
//   // Step 2
  
// Async Function: અસિંક્રોનસ ફંક્શન એ પ્રોમિસનો ઉપયોગ કરે છે, જે ઓપરેશન્સને એકબીજા પર આધાર રાખે વગર સમાન સમયે ચલાવે છે.

// function asyncFunction() {
//     setTimeout(() => {
//       console.log('Step 2');
//     }, 1000);
//     console.log('Step 1');
//   }
  
//   asyncFunction();
//   // Output:
//   // Step 1
//   // Step 2 (after 1 second)
  

// Main Difference:

// Sync: તમામ કાર્યો સિક્વેંશિયલી થાય છે. એક ઓપરેશન પૂર્ણ થાય ત્યારે જ બીજું શરૂ થાય છે.
// Async: કાર્યો અસિંક્રોનસ રીતે ચાલે છે. તમે એક કાર્યની પરિસ્થિતિ વિના બીજું કાર્ય શરૂ કરી શકો છો.