import app from './../../src/common/server';

test('exp object should not be null', () => {
  expect(app).not.toBeNull();
});
