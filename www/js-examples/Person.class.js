function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function(){
    alert('bonjour je m\'appelle '+this.name);
}

Person.prototype.sayBye = function(){
    alert('Au revoir');
}
