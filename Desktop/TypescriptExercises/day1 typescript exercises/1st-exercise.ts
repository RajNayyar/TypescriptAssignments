class StringAction {
    private listOfString : Array<string>
    sortStringsByLength(data: string[]): Array<string>
    {
        data.sort(function(a,b){
            return a.length - b.length
        })
        return data
    }
    reverseStrings(data: string[]): Array<string>  
    {
        return data.reverse()
    }
}

let sampleString:string[] = ["hdajh", "ahjbdbasjhd", "habas", "ajhdashjbdsh"]
let stringAction = new StringAction();
console.log(stringAction.reverseStrings(stringAction.sortStringsByLength(sampleString)))