import check from '../index';

test.each([ 
  [{name: 'Маг1', health: 90}, 'healthy'],
  [{name: 'Маг2', health: 45}, 'wounded'],
  [{name: 'Маг3', health: 10}, 'critical']]
)('check health', (object, expected) => {
    const result = check(object);
    expect(result).toBe(expected);
});


