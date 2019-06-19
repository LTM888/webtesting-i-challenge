const enhancer = require('./enhancer.js');
const { repair, succeed, fail, get } = require('./enhancer.js');
// test away!

// const enhancer = require('./enhancer.js');
// test away!


describe('enhancer.js', () => {
    describe('repair()', () => {
      it('restores durability to 100', () => {
        expect(repair({ durability: 89 }).durability).toBe(100);
        expect(repair({ durability: -89 }).durability).toBe(100);
        expect(repair({ durability: 100 }).durability).toBe(100);
        expect(repair({ durability: 0 })).toEqual({ durability: 100 });
      });
    });
  
    describe('success()', () => {});
  
    it.todo('should have a max of 100 for durability');
  });

  describe('enhancer.js', () => {
    describe('succeed()', () => {
      it('restores enhancement to 20', () => {
        expect(succeed({ enhcancement: 19 }).enhcancement).toBe(20);
        expect(succeed({ enhcancement: 25 }).enhcancement).toBe(20);
        expect(succeed({ enhcancement: 20 }).enhcancement).toBe(20);
        expect(succeed({ enhcancement: 5 })).toEqual({ enhcancement: 6 });
      });
    });
  
    describe('success()', () => {});
  
    it.todo('should have a max of 20 for enhcancement ');
  });

  describe('enhancer.js', () => {
    describe('fail()', () => {
      it('fail and decrease durability by 5 if less then 15', () => {
        const item ={
          name:'Leigh',
          durability: 50,
          enhcancement:14,
        };
        expected = {
          name:'Leigh',
          durability: 45,
          enhcancement: 14
        };
        const failItem = fail(item);
        expect(failItem).toEqual(expected);
      });
    });
  
    describe('fail)', () => {});
  
    it.todo('should have a max of 20 for fail ');
  

  it("decrease durability by 10 if greater than 14", () => {
    const item = {
      name: "Greg",
      durability: 50,
      enhancement: 16
    };

    const expected = {
      name: "Greg",
      durability: 40,
      enhancement: 16
    };

    const failItem = fail(item);
    expect(failItem).toEqual(expected);
  });

  it("decrease durability by 1 if greater than 16", () => {
    const item = {
      name: "Jame",
      durability: 50,
      enhancement: 18
    };

    const expected = {
      name: "Jame",
      durability: 40,
      enhancement: 17
    };

    const failItem = fail(item);
    expect(failItem).toEqual(expected);
  });

});

