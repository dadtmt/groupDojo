const { expect } = require('chai');
const { selectWilder, groupBySchoolWilders } = require('../index');

describe('selectWilder', () => {
  it('should change the selected property of the choosen wilder to true', () => {
    const wilders = [{
      id: 1,
      name: 'Axel',
      schoolName: 'Reims',
      selected: false,
    },
    {
      id: 2,
      name: 'Sébastien',
      schoolName: 'Reims',
      selected: false,
    },
    {
      id: 3,
      name: 'Anastasiya',
      schoolName: 'Berlin',
      selected: false,
    },
    {
      id: 14,
      name: 'Neli',
      schoolName: 'Berlin',
      selected: false,
    }];

    const expected = [{
      id: 1,
      name: 'Axel',
      schoolName: 'Reims',
      selected: false,
    },
    {
      id: 2,
      name: 'Sébastien',
      schoolName: 'Reims',
      selected: true,
    },
    {
      id: 3,
      name: 'Anastasiya',
      schoolName: 'Berlin',
      selected: false,
    },
    {
      id: 14,
      name: 'Neli',
      schoolName: 'Berlin',
      selected: false,
    }];

    expect(selectWilder(wilders, 2)).to.deep.equal(expected);
  });
});

groupBySchoolWilders();
