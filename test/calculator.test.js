import Calculator from '../src/calculator'

test('adds 1 + 2 to equal 3', () => {
    const result = new Calculator
    expect(result.add(1, 2)).toBe(3);
});

test('substract 1 - 2 to equal -1', () => {
    const result = new Calculator
    expect(result.substract(1, 2)).toBe(-1);
});

test('multibly 1 * 2 to equal 2', () => {
    const result = new Calculator
    expect(result.multiply(1, 2)).toBe(2);
});

test('multibly 1 / 2 to equal 0.5', () => {
    const result = new Calculator
    expect(result.divide(1, 2)).toBe(0.5);
});