import { queryString, parse } from './queryString';

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

describe('Query string to object', () => {

  it('should convert a query string to object', () => {

    const queryString = 'name=Pedro&profession=Software Engineer';

    expect(parse(queryString)).toEqual({
      name: 'Pedro',
      profession: 'Software Engineer',
    });

  });

  it('should convert a query string of a single key-value to object', () => {

    const queryString = 'name=Pedro';

    expect(parse(queryString)).toEqual({
      name: 'Pedro'
    });

  });

  it('should convert a query string to an object taking care of comma separate values', () => {

    const queryString = 'name=Pedro&hardSkills=JS,TS,TDD';

    expect(parse(queryString)).toEqual({
      name: 'Pedro',
      hardSkills: ['JS', 'TS', 'TDD'],
    });
  })


});