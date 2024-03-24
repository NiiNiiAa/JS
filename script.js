// 1) დაწერეთ JavaScript ფუნქცია (mainFunction), რომელიც იღებს ორ პარამეტრს: რიცხვსა და callback ფუნქციას.
// mainFunction გადაამოწმებს დადებიათია თუ არა რიცხვი.
// თუ უარყოფითია ამუშავდეს callback, რომელიც თავის მხრივ კვადრატში აიყვანს რიცხვს.
// თუ რიცხვი დადებითია უბრალოდ გაამრავლეთ 2-ზე.

function mainFunction (number, callback) {
    if (number < 0){
        callback (number * number)
    } else {
        callback ( number * 2)
    }
}

function theResult(result) {
    console.log("Result:", result);
}

mainFunction( -10, theResult)
mainFunction(10, theResult)





// 2) დაწერეთ ფუნქცია, რომელიც ემუშავება შემდეგ მასივს: [2,2,2,2,2,2,2,2,2,2];
// ფუნქციამ უნდა გაამრავლოს რიცხვები ერთმანეთზე (გეეომეტრიული პროგრესია) და დააბრუნოს შედეგი.
// გამოიყენეთ reduce() მეთოდი.


let numbers = [2,2,2,2,2,2,2,2,2,2];
let result = numbers.reduce((total, item) => {
    return total * item
})
console.log(result)



// 3) დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონების მასივს და აბრუნებს ახალ მასივს, 
// სადაც თითოეული სტრიქონი იწყება დიდი ასოთი. გამოიყენეთ map() მეთოდი.



let names = ["nino", "nia", "mariami", "giorgi", "nika"];

let uppercased = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));

console.log(uppercased);



// მთელი სტრიქონი დიდი ასოებით
let uppercase = names.map(name => name.toUpperCase());
console.log(uppercase);