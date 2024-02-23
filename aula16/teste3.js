
//5! = 5 x 4 x 3 x 2 x 1 -> 120

function fatorial(n) {
    let fat = 1
    for(let x = n; x > 1; x--) {
        fat *= x
    }
    return fat
}

console.log(fatorial(5))