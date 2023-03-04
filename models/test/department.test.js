const Department = require('../department.model.js');
const expect = require('chai').expect;

describe('Department', () => {

  it('Should throw an error if no "name" arg', () => {
    const dep = new Department({});

    dep.validate((err) => {
      expect(err.errors.name).to.exist;
    });
  });

});