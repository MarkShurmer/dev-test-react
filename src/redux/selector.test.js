import selector from './selector';

describe('Selector', () => {
  it('should return empty array if empty supplied', () => {
    const result = selector([]);
    expect(result).toEqual([]);
  });

  it('should return undefined if undefined supplied', () => {
    const result = selector(undefined);
    expect(result).toEqual(undefined);
  });

  it('should return array sort alphabetically if no populations', () => {
    const result = selector([{ name: 'Germany' }, { name: 'Denmark' }, { name: 'Norway' }]);
    expect(result).toEqual([{ name: 'Denmark' }, { name: 'Germany' }, { name: 'Norway' }]);
  });

  it('should return array sort by populations', () => {
    const result = selector([{ name: 'Germany', population: 20000 }, {
      name: 'Denmark',
      population: 5000,
    }, { name: 'Norway', population: 2000 }]);
    expect(result).toEqual([{ name: 'Germany', population: 20000 }, {
      name: 'Denmark',
      population: 5000,
    }, { name: 'Norway', population: 2000 }]);
  });

  it('should return array sort by populations, even with duplicate names', () => {
    const result = selector([{ name: 'Germany', population: 20000 }, {
      name: 'Norway',
      population: 2000,
    }, { name: 'Norway', population: 2000 }]);
    expect(result).toEqual([{ name: 'Germany', population: 20000 }, {
      name: 'Norway',
      population: 2000,
    }, { name: 'Norway', population: 2000 }]);
  });

  it('should return array sort by populations, even with missing populations', () => {
    const result = selector([{ name: 'Germany', population: 20000 }, {
      name: 'Netherlands',
    }, { name: 'Norway', population: 2000 }]);
    expect(result).toEqual([{ name: 'Germany', population: 20000 }, {
      name: 'Norway',
      population: 2000,
    }, { name: 'Netherlands' }]);
  });
});
