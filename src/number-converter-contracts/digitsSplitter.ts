interface DigitsSplitter {

    // singles: number;
    // tens: number;
    // hundreds: number;
    // thousands: number;

    extractSingles(number: number): string[]
    extractTens(number: number): string[]
    extractHundreds(number: number): string[]
    extractThousands(number: number): string[]

}