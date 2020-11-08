import { rewardsTester } from '../functions/rewardsTester' 

test('arrayContainingIncomplete', () => {
        expect(rewardsTester(true, true, [])).toEqual(["incomplete"])
})

test('arrayContainingTrue', () => {
    expect(rewardsTester(false, true, [])).toEqual([true])
})

test('arrayContainingFalse', () => {
    expect(rewardsTester(false, false, [])).toEqual([false])
})



