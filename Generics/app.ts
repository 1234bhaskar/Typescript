//Generics

// function logString(arg:string){
//     console.log(arg);
//     return arg;
    
// }
// function logNumber(arg:number){
//     console.log(arg);
//     return arg;
    
// }
// function logAnything(arg:any){
//     console.log(arg.slice(0,2));
//     return arg;
// }

// logString("abs")
// logNumber(1)
// logAnything([1,2,3]) //you will not get auto Completion while using any 

// //alternative to this is Generics
 
// function logGenerics<T>(arg:T):T{
//  console.log(arg);
//     return arg;
// }

// logGenerics([1,2,3])
// logGenerics("hello")
// logGenerics(true)

//2.
 interface HasAge{
     age:number;
 }

 function getOldest<T extends HasAge>(people:T[]):T{
     return people.sort((a,b)=>b.age - a.age)[0]
 }

 const people:HasAge[]=[{age:10},{age:20},{age:30}];

 interface Player{
     name:string;
     age:number;
 }

const player:Player[]=[
    
         {name:'bhaskar',age:10},
        {name:'bhaska',age:10},
         {name:'bhask',age:30},
         {name:'bhas',age:20},

 ];

 const person=getOldest(people);


 person.age;
 

