
// Fahrenheit=((400 * 9/5) + 32);
// celsius =((32 - 32) * 5/9)

function convert_to_Fahrenheit(x){

   let result =((x * 9/5) + 32)
   console.log( " Resuilt in Fahrenheit "+result);

}


function convert_to_celsius(x){
 
  let result2 = ((x - 32) * 5/9)
  console.log( " Resuilt in celsius "+result2);
}

convert_to_Fahrenheit(30)
convert_to_celsius(80);

//Task two

//var fact=5;
function calfact(num,fact)
{
 if(num!=1){
   fact=fact*(num-1);
   num=num-1;
   calfact(num);
   
  }else {
   return fact;
   console.log(fact)
  }
  console.log(num)
}

calfact(5,5);


//task 3
const myNumbers = [4, 1, -40, -7, 5, 9, -6];
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    
    if (callback(x)) {
      myArray.push(x);
      
    }
    
  }
  console.log(myArray)
  return myArray;
}


class Booklibrary{
 constructor(){
  this.allbook=[];
 }

  addbook(Author, title, is_read){

    this.allbook.push(Author,title,is_read);
    console.log("one book added ")
  }
  
  allbooks(){
     for(let all_books of this.allbook){
     console.log(all_books)
     }
  }
  deletebook(Author){
    
    this.allbook.indexOf(Author)
     this.allbook.splice(this.allbook.indexOf(Author),1)

   console.log("one book has been deleted")
    
  
}}

let lib = new Booklibrary()
lib.addbook("gods must", "man of steel", true)

lib.addbook("freeman", "joseph", true)
//lib.allbooks()
lib.deletebook("gods must")
lib.allbooks()


let person={
  name:"micheal",
  Hobbie: " reading",
  age: "27",
  occupation:" travel Agent"

};

let name = person.name;
console.log(name)

let Hobbie=person.Hobbie;
console.log(Hobbie)

let age = person.age;
console.log(age)

let occupation =person.occupation
console.log(occupation)






