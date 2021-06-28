// function mathMan() {
//     return new Promise(function (resolve, reject) {

//     })
// }

let doStuff = slowMath.add(6, 2)
.then(function(something) {
    console.log(something)
    return slowMath.multiply(something, 2)
}).then(function(somethingElse) {
    console.log(somethingElse)
    return slowMath.divide(somethingElse, 4)
}).then(function(somethingEvenElse) {
    console.log(somethingEvenElse)
    return slowMath.subtract(somethingEvenElse, 3)
}).then(function(somethingEvenElser) {
    console.log(somethingEvenElser)
    return slowMath.add(somethingEvenElser, 98)
}).then(function(somethingEvenElserr) {
    console.log(somethingEvenElserr)
    return slowMath.remainder(somethingEvenElserr, 2)
}).then(function(something) {
    console.log(something)
    return slowMath.multiply(something, 50)
}).then(function(something) {
    console.log(something)
    return slowMath.remainder(something, 40)
}).then(function(something) {
    console.log(something)
    return slowMath.add(something, 32)
}).then(function(something) {
    console.log(something)
    console.log(`The final result is ${something}.`)
    
}).catch(function(err) {
    console.log(err)
})


// let doMath = slowMath

async function doMath() {
    try {
        let math = await slowMath.add(6, 2)
        console.log(math)
        math = await slowMath.multiply(math, 2)
        console.log(math)
        math = await slowMath.divide(math, 4)
        console.log(math)
        math = await slowMath.subtract(math, 3)
        console.log(math)
        math = await slowMath.add(math, 98)
        console.log(math)
        math = await slowMath.remainder(math, 2)
        console.log(math)
        math = await slowMath.multiply(math, 50)
        console.log(math)
        math = await slowMath.remainder(math, 40)
        console.log(math)
        math = await slowMath.add(math, 32)
        console.log(math)
        console.log(`The final result is ${math}.`)


    } catch (err) {
        console.log(err)
    }
}

doMath()

