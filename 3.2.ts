{
  // oop --> inheritance
  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  }

  // create student
  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
    getSleep(numOfHours: number) {
      console.log(`${this.name} person ${numOfHours}`);
    }
  }
  //
  const student = new Student("Jane Doe", 22, "456 Elm St");
  console.log(student);

  // create Teacher
  class Teacher extends Person {
    degignatoin: string;
    constructor(
      name: string,
      age: number,
      address: string,
      degignatoin: string
    ) {
      super(name, age, address);
      this.degignatoin = degignatoin;
    }
  }
  const teacher  = new Teacher("kurshed",50,"biralla","BSC")
//   teacher.


}
