// you can either use the class way or interface way
// export class User {
    
//       public  id: String;
//       public  firstName: String;
//       public  age: Number;
//       public  company: String;

//       constructor(id: String, firstName: String, age:Number, company:String) {
//         this.age = age;
//         this.id = id;
//         this.firstName = firstName;
//         this.company = company;
//       }
      
// }

export interface User {
    id: String,
    firstName: String,
    age: Number,
    company: String
}