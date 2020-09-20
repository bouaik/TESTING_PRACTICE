import Calculator from '../src/calculator'

test('adds 1 + 2 to equal 3', () => {
    const result = new Calculator
    expect(result.add(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    const result = new Calculator
    expect(result.substract(1, 2)).toBe(-1);
});