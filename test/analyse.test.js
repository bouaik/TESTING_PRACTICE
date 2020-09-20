import analyse from '../src/analyse';

test('it should return average, minimum, maximum and length of array in an object ', () => {
  expect(analyse([1, 2, 3, 4])).toMatchObject({
    average: 2.5, min: 1, max: 4, length: 4,
  });
});