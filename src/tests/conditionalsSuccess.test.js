import { conditionalsSuccess } from '../functions/conditionalsSuccess'

test('valueHigherThanAmount', () => {
    expect(conditionalsSuccess(11, "Higher", 10, "")).toEqual("passed");
})


test('valueLowerThanAmount', () => {
    expect(conditionalsSuccess(11, "Higher", 12, "")).toEqual("failed");
})

