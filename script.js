'use strict';

const Person = function(name,birthyear){

    // console.log(this);
    this.name =name;
    this.birthyear = birthyear;
}

 const santosh =new Person('santosh','2000-6-10');
  console.log(santosh);
// 4 Steps Happens When We Use New KeyWord

  // 1) new {} created
  //2) function is called and this keyword is set to newly {}
  //3) {} linked to prototype
  //4) function automatically return {}

  const sachin = new Person('sachin',1998);
  const shailesh = new Person('shailesh',2001);

  console.log(sachin);
  //Person {name: 'sachin', birthyear: 1998}
// birthyear: 1998
// name: "sachin"
// [[Prototype]]: Object
// constructor: ƒ (name,birthyear)
// [[Prototype]]: Object
  console.log(shailesh);

  //class declaration
  class Personcl {
    constructor(fistname,year){
      this.firstname = fistname;
      this.year =year;
    }

    clacAge(){
      console.log(2037-this.year);
    }
  }

  const jessica = new Personcl('jessica',1997);

  jessica.clacAge();


  // SEETERS AND GETTERS

  const account = {
    owner :'santosh',
    mov : [12,34,244,289],

   get latest(){
      return this.mov.slice(-1).pop();
    }
  }

  console.log(account.latest);