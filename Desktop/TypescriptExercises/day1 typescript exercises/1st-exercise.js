var StringAction = /** @class */ (function () {
    function StringAction() {
    }
    StringAction.prototype.sortStringsByLength = function (data) {
        data.sort(function (a, b) {
            return a.length - b.length;
        });
        return data;
    };
    StringAction.prototype.reverseStrings = function (data) {
        return data.reverse();
    };
    return StringAction;
}());
var sampleString = ["hdajh", "ahjbdbasjhd", "habas", "ajhdashjbdsh"];
var stringAction = new StringAction();
console.log(stringAction.reverseStrings(stringAction.sortStringsByLength(sampleString)));
