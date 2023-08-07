// import the function sum from the app.js file
const { sum } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound} = require('./app.js');


// start your first test
test("adds 14 + 9 to equal 23", () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14,9);

    // we expect the sum of those 2 numbers to be 23
    const expected =14+9;
    
    expect(sum(14,9)).toBe(expected);
});

test('One euro should be 1.206 dollars', () => {
    //inside the test we call our sum function with 2 numbers
    const dollars = fromEuroToDollar(3.5);

    // we expect the sum of those 2 numbers to be 23
    const expected =3.5*1.2;
    
    expect(fromEuroToDollar(3.5)).toBe(expected);
});

test('Dollar to Yen:', () => {
    //inside the test we call our sum function with 2 numbers
    const yen= fromDollarToYen (3.5);

    // we expect the sum of those 2 numbers to be 23
    const expected =3.5*127.9/1.2;
    
    expect(fromDollarToYen (3.5)).toBe( expected);
});

test('Yen to Pound:', () => {
    //inside the test we call our sum function with 2 numbers
    const pound= fromYenToPound (3.5);

    // we expect the sum of those 2 numbers to be 23
    const expected =3.5*0.8/127.9;
    
    expect(fromYenToPound (3.5)).toBe(expected);
});