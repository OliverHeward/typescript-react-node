class Person {
    constructor(private readonly msg: string) { }
    speak() {
        // This will error due to being readonly - once set it can not be updated.
        this.msg = "speak " + this.msg;
        console.log(this.msg);
    }
}

const tom = new Person("hello");
// tom.msg = "Hello";
tom.speak();