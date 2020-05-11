class StringAnalysis{
    findOccurance(data:string, subString: string):number
    {
        return (data.match(new RegExp(subString, "g"))).length
    }
    findIndexes(data: string, subString: string): Array<number>
    {
        var indeces : number[] = []
        for(var i=0 ; i<data.length; i++)
            if(data[i]==subString)
                indeces.push(i)
        return indeces
    }
    fetchStatementsCount(data: string, subString: string): number
    {
        return data.split(subString).length
    }
    statementsToUpperCase(data: string)
    {
        let statements = data.split(".")
        let convertedStatements : string[] = []
        statements.forEach(element => {
           let charArray = element.split('')
           for(let i=0;i<charArray.length;i++)
           {
            if(charArray[i].match(/[a-zA-Z]/))
            {
                console.log(charArray[i])
                charArray[i] = charArray[i].toUpperCase()
                console.log(charArray[i])
                break
            }
           }
            let statement = charArray.join("") 
            convertedStatements.push(statement)            
           });
        return convertedStatements.join(".")
    }
}

let data : string = "With this utility you generate a 16 character output based on your input of numbers and upper and lower case letters.  random strings can be unique. used in computing, a random string generator can also be called a random character string generator. this is an important tool if you want to generate a unique set of strings. The utility generates a sequence that lacks a pattern and is random."
let subString: string = "a"
let stringAnalysis = new StringAnalysis()
console.log("occurances of " + subString + " :", stringAnalysis.findOccurance(data, subString))
console.log("indeces of" + subString + ":", stringAnalysis.findIndexes(data, subString))
console.log("No of statements: ", stringAnalysis.fetchStatementsCount(data, "."))
console.log("Statements after uppercase operation: " + stringAnalysis.statementsToUpperCase(data))