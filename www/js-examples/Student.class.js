function Student(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.sayHi = function(){
    alert('Bonjour je m\'appelle '+this.name+' et j\'étudie '+this.subject);
};