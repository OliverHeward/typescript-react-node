// function getLength<T>(arg: T): number {
//     if (arg.hasOwnProperty("length")) {
//         return arg["length"];
//     }
//     return 0;
// }

// console.log(getLength<number>(22));
// console.log(getLength("Hello world."));

interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(arg: T): number {
    return arg.length;
}

// <number> will fail as we have returned type of .length even though we have type def'd number
console.log(getLength<number>(22));
console.log(getLength("Hello world."));