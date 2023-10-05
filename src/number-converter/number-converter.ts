export class NumberConverter implements DigitsSplitter {

    constructor() {}

    extractHundreds(number: number): string[] {
        return [];
    }

    extractSingles(number: number): string[] {
        let digitsInArrays = number.toString().split("")
        return digitsInArrays;
    }

    extractTens(number: number): string[] {
        return [];
    }

    extractThousands(number: number): string[] {
        return [];
    }
}