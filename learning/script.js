// var company='Luminar'
// var place='Kakkanad'
// console.log(company,'located in',place);



// var tempindeg=32
// var tempinfar=(tempindeg * 1.8) + 32
// console.log(tempindeg, 'degree celcious is',tempinfar,'degree farenheat');



var num=10

// if (num < 0){
//     console.log('num is negative');
// }
// else if(num > 0){
//     console.log('num is positive');
// }
// else{
//     console.log('num is zero');
// }



// var gender = 'male'
// var tummysize = 35
// var buttocksize = 40
// var bmi = tummysize / buttocksize
// console.log('BMI:',bmi);

// if (gender == 'male'){
//     if (bmi <= 0.95){
//         console.log('HEALTH RISK: Low')
//         console.log('BODY SHAPE: Perl')
//     }
//     else if(0.96 <= bmi <= 1.0){
//         console.log('HEALTH RISK: Medium')
//         console.log('BODY SHAPE: Avocado')
//     }
//     else{
//         console.log('HEALTH RISK: High')
//         console.log('BODY SHAPE: Apple')
//     }
// }
// else if(gender == 'female'){
//     if (bmi <= 0.80){
//         console.log('HEALTH RISK: Low')
//         console.log('BODY SHAPE: Perl')
//     }
//     else if(0.81 <= bmi <= 0.85){
//         console.log('HEALTH RISK: Medium')
//         console.log('BODY SHAPE: Avocado')
//     }
//     else{
//         console.log('HEALTH RISK: High')
//         console.log('BODY SHAPE: Apple')
//     }
// }
// else{
//     console.log('invalid gender');
// }




// var num = 6
// var rev_num = 0
// while (num != 0) {
//     rev_num *= 10
//     rev_num += num % 10
//     num = Math.floor(num/10)
// }
// console.log(rev_num);



// var rev_num = ''
//
// while (num != 0) {
//     let last_digit = num % 10
//     rev_num += last_digit
//     num = Math.floor(num / 10)
// }
// console.log(rev_num);




// temp_storage = num
// var digits_count = num.toString().length
// var sum = 0

// while (num != 0) {
//     let digit = num % 10
//     sum += (digit ** digits_count)
//     num = Math.floor(num / 10)
// }
// if (sum == temp_storage) {
//     console.log('is an armstrong Number');
// }
// else {
//     console.log('is not an armstrong number'); 
// }



// var sum = 0

// while ( num != 0) {
//     sum += num
//     num = Math.floor(num / 10)
// }
// console.log(sum);




// var fact = 1

// for (let i = num; i > 0; i--) {
//     fact *= i
// }
// console.log('factorial of', num, 'is', fact);



// let isPrime = true;

// if (num != 1 && num != 2) {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
// }
// console.log(isPrime);



// console.log(typeof(30))
// console.log(typeof(30.5))
// console.log(typeof('30'))
// console.log(typeof(true))




// let expences = [1000, 2000, 3000];

// for (let exp of expences) {
//     console.log(exp);
// }



let arrayOne = [1,2,4,5]
// let arrayTwo = [2,3,4,7,8,9]

// let i = 0;
// let j = 0;

// while (i < arrayOne.length && j < arrayTwo.length) {

//     if (arrayOne[i] > arrayTwo[j]) {
//         j ++;
//     }
//     else if (arrayOne[i] < arrayTwo[j]) {
//         i++;
//     }
//     else{
//         console.log(arrayOne[i])
//         i++;
//         j++;
//     }
// }



// function add(num1, num2) {
//     return num1 + num2;
// }

// console.log(add(5,10))



// function maxNum(n1,n2) {
//     return n1>n2 ? n1 : n2
// }


// function oddOrEven(n1) {
//     return n1 % 2 == 0 ? 'even' : 'odd'
// }




// function getMissingNumber(numArray) {
//     let i = 0;
//     while (i < numArray.length - 1) {
//         if (numArray[i] + 1 != numArray[i + 1]) {
//             return console.log(numArray[i] + 1);
//         }
//         i++;
//     }
//     return console.log(numArray[i] + 1);
// }

// getMissingNumber([1,2,3,4,5])




// numArray = [1,2,4,3,5,6];
// numArray.push(10);
// numArray.pop();
// console.log(numArray);
// console.log(numArray.includes(3));

// let squareArray = numArray.map((n) =>n **2);
// console.log(squareArray);

// let updatedArray = numArray.map((n) => n>5 ? n+1 : n<5 ? n-1 : 5);
// console.log(updatedArray);

// let evenNumSquaresArray = numArray.filter((n) => n%2 == 0).map((n) => n**2);
// console.log(evenNumSquaresArray);

// let arraySum = numArray.reduce((n1,n2) => n1+n2);
// console.log(arraySum);

// let maxNumber = numArray.reduce((n1,n2) => n1>n2 ? n1 : n2);
// console.log(maxNumber);

// console.log(numArray.sort((n1,n2) => n1-n2));


// let employee = {
//     'id':1,
//     'name':'naveen',
//     'department':'IT',
//     'salary':100000
// }

// console.log('gender' in employee)
// employee.gender = 'male'
// employee.salary += 50000
// console.log(employee)





// let text = 'hello hai hello hai';
// wordDict = {};

// text.split(' ').map((word) => word in wordDict ? wordDict[word] += 1 : wordDict[word] = 1)

// console.log(wordDict);





// let pattern = 'AABBCDDE';

// wordCount = {};

// for ( c of pattern) {
//     c in wordCount ? wordCount[c] += 1 : wordCount[c] = 1;
// }
// for (key in wordCount) {
//     if (wordCount[key] == 1) {
//         console.log(key);
//     }
// }





// let courses = [
//     {id:1, name:'django', rating:'4', topics:['html, css','bootstrap','python','angular'], database:'sqlite'},
//     {id:2, name:'mern', rating:'3', topics:['html, css','bootstrap','node','express', 'react'], database:'mongodb'},
//     {id:3, name:'asp.net', rating:'5', topics:['html, css','bootstrap','c#','angular'], database:'mysql'},
//     {id:4, name:'springboot', rating:'4', topics:['html, css','bootstrap','java'], database:'postgres'},
// ]


// courseNames = courses.map((courseObj) => courseObj.name);
// console.log(courseNames)

// console.log(courses.filter((courseObj) => courseObj.database == 'mysql').map((courseObj) => courseObj.name));

// console.log(courses.filter((courseObj) => courseObj.rating > 3).map((courseObj) => courseObj.name));

// courses.sort((courseObj1, courseObj2) => courseObj2.rating-courseObj1.rating);

// console.log(courses);

// console.log(courses.find((courseObj) => courseObj.id == 2))

// courses.forEach((courseObj) => console.log(courseObj.name))


// console.log('starters')
// setTimeout(() => console.log('mainCourse'), 2000);
// console.log('dessert')


let request = new XMLHttpRequest();
request.open('get', 'https://jsonplaceholder.typicode.com/users');
request.send();

request.onreadystatechange=() => {
    if (request.readyState == 4) {
        if (request.status > 199 && request.status < 300) {
            let data = JSON.parse(request.responseText);
        }
    }
}
