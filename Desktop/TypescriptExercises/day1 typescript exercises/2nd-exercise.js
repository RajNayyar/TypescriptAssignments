var StringAnalysis = /** @class */ (function () {
    function StringAnalysis() {
    }
    StringAnalysis.prototype.findOccurance = function (data, subString) {
        return (data.match(new RegExp(subString, "g"))).length;
    };
    StringAnalysis.prototype.findIndexes = function (data, subString) {
        var indeces = [];
        for (var i = 0; i < data.length; i++)
            if (data[i] == subString)
                indeces.push(i);
        return indeces;
    };
    StringAnalysis.prototype.fetchStatementsCount = function (data, subString) {
        return data.split(subString).length;
    };
    StringAnalysis.prototype.statementsToUpperCase = function (data) {
        var statements = data.split(".");
        var convertedStatements = [];
        statements.forEach(function (element) {
            var charArray = element.split('');
            for (var i = 0; i < charArray.length; i++) {
                if (charArray[i].match(/[a-zA-Z]/)) {
                    console.log(charArray[i]);
                    charArray[i] = charArray[i].toUpperCase();
                    console.log(charArray[i]);
                    break;
                }
            }
            var statement = charArray.join("");
            convertedStatements.push(statement);
        });
        return convertedStatements.join(".");
    };
    return StringAnalysis;
}());
var data = "With this utility you generate a 16 character output based on your input of numbers and upper and lower case letters.  random strings can be unique. used in computing, a random string generator can also be called a random character string generator. this is an important tool if you want to generate a unique set of strings. The utility generates a sequence that lacks a pattern and is random.";
var subString = "a";
var stringAnalysis = new StringAnalysis();
console.log("occurances of " + subString + " :", stringAnalysis.findOccurance(data, subString));
console.log("indeces of" + subString + ":", stringAnalysis.findIndexes(data, subString));
console.log("No of statements: ", stringAnalysis.fetchStatementsCount(data, "."));
console.log("Statements after uppercase operation: " + stringAnalysis.statementsToUpperCase(data));
