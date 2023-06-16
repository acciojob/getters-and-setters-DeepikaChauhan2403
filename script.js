//complete this code
class Person {
	constructor(name,age){
		this._name = name;
		this._age = age;
	}

	get getName(){
		return this._name;
	}

	set setAge(age){
		this.age = age;
	}
}

class Student extends Person {
	constructor(name,age){
		super();
	}

	study(){
		console.log(this.name+" is studying")
	}
}

class Teacher extends Person {
	constructor(name,age){
		super();
	}

	teach(){
		console.log(this.name+" is teaching")
	}
}

const person = new Person("John",30);
const student = new Student("Alice", 30);
const teacher = new Teacher("Alice", 30);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
