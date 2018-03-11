/* I Declare */

// var x = 3,
//     y = 2.5,
//     z = '3',
//     result = x > y;

// console.log(result + ": " + typeof result);
// console.log(x + ": " + typeof x);
// console.log(y + ": " + typeof y);
// console.log(z + ": " + typeof z)
// console.log(console + ": " + typeof console)

/* Types */

// var add = "hello",
//     x = '2.5',
//     y = '3.5',
//     z = 9;

// console.log(add + add);
// console.log(x + y);
// console.log(x * y);
// console.log(z + parseInt(x));

/* Functions */

var writeGretting = function(name) {
    console.log("Hello " + name + " !");
    console.log("My name is Muhannad");
}


writeGretting(process.argv[2]);
