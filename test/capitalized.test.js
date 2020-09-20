import capitalized from '../src/capitalized';

test('it should return the String with first character capitalized', () => {
  expect(capitalized('hello')).toBe('Hello');
});

test('it should return emty string if one is given', () => {
  expect(capitalized('')).toBe('');
});