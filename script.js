// let a = 5;

// for (let i = 0; i < a; i++) {
//     console.log("Hello World", i);
// }

// console.log(process.argv);

let args = process.argv;
for (let i = 2; i < args.length; i++) {
    console.log("hello welcome to node js", args[i]);
}