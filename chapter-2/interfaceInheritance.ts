namespace InterfaceNamespace {
    interface Thing {
        name: string;
        getFullName: () => string; // string is passed as there is a string return from function
    }

    interface Vehicle extends Thing {
        wheelCount: number;
        updateWheelCount: (newWheelCount: number) => void; // void is passed due to no return from function
        showNumberOfWheels: () => void; // void is passed due to no return from function
    }

    class Motorcycle implements Vehicle {
        name: string;
        wheelCount: number;
        constructor(name: string) {
            // no super for interfaces
            this.name = name;
        }
        updateWheelCount(newWheelCount: number) {
            this.wheelCount = newWheelCount;
            console.log(`Automobile has ${this.wheelCount}`);
        }
        showNumberOfWheels() {
            console.log(`moved Automobile ${this.wheelCount}`);
        }
        getFullName() {
            return "MC-" + this.name;
        }
    }

    const moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
}