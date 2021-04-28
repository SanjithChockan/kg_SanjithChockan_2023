var inputs = process.argv.slice(2);
var phonetic = ["Zero","One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
var output = []

for (let i = 0; i < inputs.length; i++) {
    let tempString = "";
    let indInput = inputs[i];
    for (let k = 0; k < indInput.length; k++) {
        tempString += phonetic[parseInt(indInput[k])];
    }
    output.push(tempString);
}

console.log(output.toString());
