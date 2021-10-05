


/**
 * Sum array of numbers
 * @param {number[]} arr
 * @returns 
 */
const sum = (arr) => {
    if (!Array.isArray(arr)) return "Enter an array of numbers";
    if (arr.length === 1) {
        return arr[0];
    }
    return arr.reduce((val1, val2) => val1 + val2);
}

console.log("Sum array of numbers: " + sum([1, 2, 3, 4]));

/**
 * Multiply array elements of numbers
 * @param {number[]} arr
 * @returns number
 */
const multiply = (arr) => {
    if (!Array.isArray(arr)) return "Enter an array of numbers";
    if (arr.length === 1) return arr[0];
    return arr.reduce((val1, val2) => val1 * val2);
}



/**
 * Reverse a string
 * @param {String} string
 * @returns 
 */
const reverse = (string) => {
    return string.split("").reverse().reduce((char1, char2) => {
        return char1 + char2;
    });
}


/**
 * Return filtered array of words greater than I
 * @param {word:String} words
 * @param {i:number} i
 * @returns
 */
const filterLongWords = (words, i) => {
    if (!Array.isArray(words)) return "Enter array of words";
    if (i.isNaN) return "i must be a number";
    return words.filter(word => word.length > i);
}



window.onload = () =>{
    mocha.setup('bdd');
    let assert = chai.assert;
    describe("Sum array of Numbers", function () {
        it("Method accepts an array of numbers, and returns the sum of all the numbers",
            function () {
                assert.equal(10, sum([1, 2, 3, 4]));
        });
    });

    describe("Product of number array elements", function () {
        it("Method accepts an array of numbers, and returns the product of all the numbers",
            function () {
                assert.equal(24, multiply([1, 2, 3, 4]));
            });
    });

    describe("Reverses a String", function () {
        it("Method accepts a string, and returns the reverse of it",
            function () {
                assert.equal("leunammE", reverse("Emmanuel"));
            });
    });

    describe("Filters long words", function () {
        it("Method accepts an array of strings and a number i, and returns an array of strings with lengths greater than i",
            function () {
                assert.equal(["Emmanuel", "Nigeria"].toString(), filterLongWords(["Emmanuel", "Akos", "Nigeria"], 5).toString());
            });
    });
    mocha.run();
}