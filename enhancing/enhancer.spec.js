const enhancer = require('./enhancer.js');
const { repair, succeed, fail, get } = require('./enhancer.js');
// test away!



describe('enhancer.js', () => {
    describe('repair()', () => {
        it('restores durability to 100', () => {
            // Repair
            expect(repair({ durability : 89}).durability).toBe(100);
            expect(repair({ durability : -89}).durability).toBe(100);
            expect(repair({ durability : 100}).durability).toBe(100);
            expect(repair({ durability : 0}).durability).toBe(100);
        });
    });

    it.todo('should have a max of 100 for durability')
});