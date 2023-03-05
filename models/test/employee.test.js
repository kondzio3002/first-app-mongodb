const Employee = require('../employee.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Employee', () => {

  it('Should throw an error if no args', () => {
    const emp = new Employee({});

    emp.validate(err => {
      expect(err.errors).to.exist;
    });

    after(() => {
      mongoose.models = {};
    });
  });

  it('Should throw an error if is not a string', () => {

    const cases = [{}, []];
    for(let obj of cases) {
      const emp = new Employee({ obj });

      emp.validate(err => {
        expect(err.errors).to.exist;
      });
    }

    after(() => {
      mongoose.models = {};
    });
  });

  it('should throw an error if no "firsName", "lastName" or "department" arg', () => {

    const cases = [
      { firstName: 'John' },
      { lastName: 'Doe' },
      { department: 'IT' },
      { firstName: 'John', lastName: 'Doe' },
      { lastName: 'Doe', department: 'IT' }
    ];

    for (let doc of cases) {
      const emp = new Employee(doc);
      emp.validate(err => {
        expect(err.errors).to.exist;
      });
    }

    after(() => {
      mongoose.models = {};
    });
  });

  it('Should accept if is good', () => {
    
    const cases = [{ firstName: 'John', lastName: 'Doe', department: 'IT'}, { firstName: 'Amanda', lastName: 'Doe', department: 'Marketing' }];
    for(let doc of cases) {
      const emp = new Employee(doc);
      emp.validate(err => {
        expect(err).to.not.exist;
      });
    }

    after(() => {
      mongoose.models = {};
    });
  });

});