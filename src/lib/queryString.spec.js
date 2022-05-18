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

  it('should create a valid query string even when an array is passed as value', () => {

    const obj = {
      name: 'Pedro',
      hardSkills: ['JS', 'TS', 'TDD'],
    };

    expect(queryString(obj)).toBe(
      'name=Pedro&hardSkills=JS,TS,TDD'
    );

  });

  it('should throw an error when an object is passed as values', () => {
    
    const obj = {
      name: 'Pedro',
      skills: {
        hard: ['JS', 'TS', 'TDD'],
        soft: ['communication', 'problem solving'],
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();

  })

});

// describe('Query string to object', () => {

// });