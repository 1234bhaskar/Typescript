//1  .
//js
// let num1 = "1";
// function add(num1:number, num2:number) {
//   return num1 + num2;
// }
//  console.log(add(num1, 2));
//ts
// let num1 = "1";
// function add(num1:number, num2:number) {
//   return num1 + num2;
// }
//  console.log(add(num1, 2));
//2.
// function getTota(numbers:Array<number>) {
//   return numbers.reduce((sum, item) => {
//     return sum + item;
//   }, 0);
// }
// console.log(getTota([1, 2, 3]));
//3. (Auto complete feature)
// const object={
//     userName:"bhaskar",
//     age:30,
//     gender:"male",
// }
// console.log(object.age);//after writing object. ,the keys will be provided by typescript & you dont hVE TO REFFER. 
//4. (type alias)
//inbulit types
//number
//string
//arr[]
//boolean
// Type alias(custom types)
// type User={
//     name:string,
//     age:number,
//     address?:string,// address is optional 
// }
// const user:User={
//    name:"bhaskar",
//    age:2,
// }
//  const user={
//     name:"bhaskar",
//     age:2,
//     //address:"123"
//  }
// function login(userdata:User):User{ //second User is of return type
//     return userdata;
// }
// console.log(login(user));
// console.log(login({name:"abc",age:1}));
//5.
// type Id=number|string;
// const userId:Id=1; //123,"123"
//6. interface (shape of an object)
// interface Transaction{
//     payerAccountNo:number;
//     payeeAccountNo:number;
// }
// interface BankAcount{
//     accountNumber:number;
//     accountHolder:string;
//     balance:number;
//     isActive:true;
//     transactions:Transaction[]
// }
// const transaction1:Transaction={
// payerAccountNo:123,
//     payeeAccountNo:456,
// }
// const bankAcount:BankAcount={
//      accountNumber:123,
//     accountHolder:"string",
//     balance:123245,
//     isActive:true,
//     transactions:[transaction1]
// }
//7. Extend(like inheritence)
// interface A{
//     name:string;
//     age:number
// }
// interface B extends A{
//     employed:boolean;
// }
// const user1:B={
//     employed:true,
//     name:"string",
//     age:20,
// }
// console.log(user1);
//8. merging
// interface Book{
//     name:string;
//     age:number;
// }
// interface Book{
//     address:string;
// }
// const book:Book={
// name:"abc",
// age:21,
// address:"sncns",
//}
//differnce b/w type and interface we cannot do merging in type
//1.
// type Books={
//     name:string;
// }
// type Books={
//     age:number;
// }
//2. we can not give primitives using interface
// type SanitizedString=string;
// type EvenNumber=number;
//3. Union
// type Id=number|string;
//it will throw error
// function printId(id:Id){
//    console.log(id.toUpperCase());
// }
//Narrowing
// function printId(id:Id){
//     if(typeof id==='string'){
//         console.log(id.toUpperCase());
//     }
// }
// printId("1");
function getFirstThree(x) {
    return x.slice(0, 3);
}
console.log(getFirstThree("hello"));
console.log(getFirstThree([1, 2, 3, 4, 5]));
