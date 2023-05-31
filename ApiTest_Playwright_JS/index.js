console.log('Hello world');
let myName='Malu';
myName=23;
console.log(myName);
let interestRate=0.3;
interestRate=1;
console.log(interestRate);

//Object
let person={
    name:'gb',
    age:27
};
console.log(person);
person.name='Arjun';
console.log(person.name);       //dot notation to access

person['name']='parvathy';     // bracket notation
console.log(person.name); 

//Arrays
let selectedColors=['Red','Black','Blue'];   //  [] indicates array
console.log(selectedColors);
console.log(selectedColors[0]);    //accessing value at index position 0
selectedColors[3]='Green';         //adding a fourth value in array- length of array is dynamic
console.log(selectedColors);  
selectedColors[3]=5;              // Type of object in array -Dynamic

//properties of array
 console.log(selectedColors.length); 

 //Functions
function greet(n)   //n is the parameter given at time of decalaration
{
    console.log('Good Morning '+n);
}
greet('gb');      // gb is the argument -actual value given

function cube(number)
    {
return number*number*number
    }
console.log(cube(7));

  

