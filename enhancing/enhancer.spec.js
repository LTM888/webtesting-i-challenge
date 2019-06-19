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
  
    it.todo('should have a max of 20 for durability');
  });