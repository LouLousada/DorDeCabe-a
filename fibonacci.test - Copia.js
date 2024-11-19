const fibonacci = require('./fibonacci.js');
console.log(fibonacci(10));


test('os 10 primeiros números da contagem fibonacci devem ser os corretos', () =>{
    expect(fibonacci(10)).toEqual([0, 1,1, 2, 3, 5, 8, 13, 21, 34]);
});
test('os 2 primeiros números da contagem fibonacci devem ser os corretos', () =>{
    expect(fibonacci(2)).toEqual([0,1]);
}); 