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
        // succed
        it('Adheres to Succced test', () => {
            expect(succeed({item: 2}).enhancement).toBe(2);
            expect(succeed({item: 35}).enhancement).toBe(35);
            expect(succeed(({succeed: 3})).enhancement).toBe(50);
        });
        // Fail
        it('Adheres to  test conditions of Failure', () =>{
            //If enhancement if less than 15 return durability - 5 
            expect(fail(14).enhancement).toBe(14) && fail(14).durability.toBe(9);
            
            //If enhancement if more than 15 return durability - 10
            expect(fail(14).enhancement).toBe(14) && fail(14).durability.toBe(4);
        
            //If the item's enhancement level is greater than 16, the enhancement 
            //level decreases by 1 (17 goes down to 16, 18 goes down to 17).
            expect(fail(17).enhancement).toBe(16)
        })

    });

    it.todo('should have a max of 100 for durability')
});