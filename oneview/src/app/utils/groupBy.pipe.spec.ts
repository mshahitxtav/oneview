import { GroupByPipe } from './groupBy.pipe';

describe('GroupByPipe', () => {
  let pipe: GroupByPipe;

  beforeEach(() => {
    pipe = new GroupByPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should group items by a specified field', () => {
    const items = [
      { name: 'Apple', category: 'Fruit' },
      { name: 'Banana', category: 'Fruit' },
      { name: 'Carrot', category: 'Vegetable' },
      { name: 'Broccoli', category: 'Vegetable' },
      { name: 'Strawberry', category: 'Fruit' }
    ];

    const result = pipe.transform(items, 'category');
    expect(result).toEqual([
      { key: 'Fruit', value: [
        { name: 'Apple', category: 'Fruit' },
        { name: 'Banana', category: 'Fruit' },
        { name: 'Strawberry', category: 'Fruit' }
      ]},
      { key: 'Vegetable', value: [
        { name: 'Carrot', category: 'Vegetable' },
        { name: 'Broccoli', category: 'Vegetable' }
      ]}
    ]);
  });

  it('should return an empty array if input is not an array', () => {
    const result = pipe.transform([], 'category');
    expect(result).toEqual([]);
  });

  it('should sort the groups in ascending order', () => {
    const items = [
      { name: 'Carrot', category: 'Vegetable' },
      { name: 'Apple', category: 'Fruit' },
      { name: 'Banana', category: 'Fruit' },
      { name: 'Broccoli', category: 'Vegetable' },
      { name: 'Strawberry', category: 'Fruit' }
    ];

    const result = pipe.transform(items, 'category');
    expect(result).toEqual([
      { key: 'Fruit', value: [
        { name: 'Apple', category: 'Fruit' },
        { name: 'Banana', category: 'Fruit' },
        { name: 'Strawberry', category: 'Fruit' }
      ]},
      { key: 'Vegetable', value: [
        { name: 'Carrot', category: 'Vegetable' },
        { name: 'Broccoli', category: 'Vegetable' }
      ]}
    ]);
  });
});
