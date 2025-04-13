class Animals {
  constructor(name) {
    this.name = name;
  }
  speak() {}
}

class Cat extends Animals {
  constructor(name) {
    super(name);
  }
  speak() {
    return `${this.name} meows`;
  }
}

const cat = new Cat("Cat");
console.log(cat.speak());
