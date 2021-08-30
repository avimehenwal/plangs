// Nested functions
// require more memory and processing power than normal functions
// var vs let, var is hoisted from global scope

for (let i = 0; i < 3; i++) {
    const log = () => {
        console.log(i)
    }

    setTimeout(log, 100)

}