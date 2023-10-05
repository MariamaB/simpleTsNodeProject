import { NumberConverter } from "../../src/number-converter/number-converter";


describe("NumberConverter", () => {
    let numberConverter = new NumberConverter();
    beforeEach(() =>{

    })

    test('extract singles', () => {
        console.log("log", numberConverter.extractSingles(2345))
    expect(numberConverter.extractSingles(2345)).toEqual(['2','3','4','5']);
});
})
