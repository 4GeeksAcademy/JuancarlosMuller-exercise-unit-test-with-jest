
const sum = (a,b) => {
    return a+b

}


// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (a) => {
    return a*oneEuroIs.USD

}

const fromDollarToYen = (a) => {
    return a * oneEuroIs.JPY / oneEuroIs.USD

}


const fromYenToPound= (a) => {
    return a * oneEuroIs.GBP/oneEuroIs.JPY

}


// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = {sum, fromEuroToDollar, fromYenToPound , fromDollarToYen };