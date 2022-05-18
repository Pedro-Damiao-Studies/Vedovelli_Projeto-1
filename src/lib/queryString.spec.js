const { queryString } = require('./queryString');

describe('Object to query string', () => {

  it('should create a valid query string when an object is provided', () => {

    const obj = {
      name: 'Pedro',
      profession: 'Software Engineer',
    };

    expect(queryString(obj)).toBe(
      'name=Pedro&profession=Software Engineer'
    );

  });

});

// describe('Query string to object', () => {

// });