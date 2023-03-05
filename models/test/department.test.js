const Department = require('../department.model');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Department', () => {

  it('Should throw an error if no "name" arg', () => {
    const dep = new Department({});

    dep.validate(err => {
      expect(err.errors.name).to.exist;
    });

    after(() => {
      mongoose.models = {};
    });
  });

  it('Should throw an error if "name" is not a string', () => {

    const cases = [{}, []];
    for(let name of cases) {
      const dep = new Department({ name });

      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });
    }

    after(() => {
      mongoose.models = {};
    });
  });

  it('Should throw an error if "name" is length lower than 5 or higher 20', () => {

    const cases = ['abc', 'Lore', 'Lorem Ipsum, Lorem Ipsum'];
    for(let name of cases) {
      const dep = new Department({ name });

      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });
    }

    after(() => {
      mongoose.models = {};
    });
  });

  it('Should accept if "name" is good', () => {
    
    const cases = ['Management', 'Human Resources'];
    for(let name of cases) {
      const dep = new Department({ name });
      dep.validate(err => {
        expect(err).to.not.exist;
      });
    }

    after(() => {
      mongoose.models = {};
    });
  });

});