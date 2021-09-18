

console.log(typeof(NaN));
//console.log();

console.log("a value")
process.argv.slice(2)


let firstName = "Samuel";
let age =" 30";
const str = [firstName +" is " + age +" years " +"old" ];
console.log(str);
const str1 = [`${firstName}  is  ${age}  years old `];
console.log(str1);

const double = function(age) {
    return age * 2;}
    
    console.log(double(age));
 
 const newAge = 60;
    console.log(newAge=="60");

 console.log(newAge==="60");

    let i=12 
        console.log(newAge/i)

        console.log(Math.floor(Math.random()*11 +10));


        let string = "screaming_snake_case";
        console.log(string.toUpperCase());

        let string1 = "I love string manipulation";
        console.log(string1.slice(2,6));

        const letters = [
            ['a', 'b', 'c'],
            ['d', 'e', 'f'],
            ['g', 'h', 'i'],
          ]
          console.log(letters[2][0]);
          console.log(letters.length);

          let newArray= ['j','k','l']
          letters.push(newArray);
          console.log(letters);