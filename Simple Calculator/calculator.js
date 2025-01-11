
document.getElementById("result").value="0";
 function dis(val) { 
    if(document.getElementById("result").value=="0"){
         document.getElementById("result").value=val;
     }
     else  document.getElementById("result").value += val; 
 } 

// var cal = document.getElementById("calcu"); 
function del(){
    let x= document.getElementById('result').value;
    x=x.slice(0,-1);
    document.getElementById('result').value=x;
}
// // Function that clear the display 
function clr() { 
    document.getElementById("result").value = "0" ;
} 
function seperate(s) {
    // --- Parse a calculation string into an array of numbers and operators
    const r = [];
    console.log("inside 2");
    let str = "^*/%+-";
    let token = '';
    for (const character of s) {
        console.log('^*/%+-'.includes(character));
        if (str.includes(character)) {
            if (token === '' && character === '-') {
                token = '-';
            } else {
                r.push(parseFloat(token))
                r.push (character);
                //console.log("hell "+r.push(parseFloat(token), character));
                console.log("r is "+r);
                token = '';
            }
        }
         else {
            console.log(character);
            token += character;
        }
    }
    if (token !== '') {
        console.log("r is "+r);
        r.push(parseFloat(token));
    }
    return r;
}

function calculate(tokens) {
    console.log("inside 3");
    // --- Perform a calculation expressed as an array of operators and numbers
    // const operatorPrecedence = [{'^': (a, b) => Math.pow(a, b)},
    //            {'*': (a, b) => a * b, '/': (a, b) => a / b,
    //            '%':(a,b)=>a % b},
    //            {'+': (a, b) => a + b, '-': (a, b) => a - b}];
    // let operator;
    // for (const operators of operatorPrecedence) {
    //     const newTokens = [];
    //     console.log(newTokens.length+"hhhh")
    //     for (const token of tokens) {
    //         if (token in operators) {
    //             operator = operators[token];
    //             console.log("hello"+operator);
    //         } else if (operator) {
    //             newTokens[newTokens.length - 1] = 
    //                 operator(newTokens[newTokens.length - 1], token);
    //                 console.log(newTokens+"hiiiii");
    //             operator = null;
    //         } else {
                
    //             newTokens.push(token);
    //             console.log("john"+newTokens);
    //         }
    //     }
    //     tokens = newTokens;
    //     console.log(tokens.length+"tokens length");
    // }
    // if (tokens.length > 1) {
    //     console.log('Error: unable to resolve calculation');
    //     return tokens;
    // } else {
    //     console.log(tokens);
    //     return tokens[0];
    // }
    let arr = ['^','*','/','%','+','-'];
    let sum=0;
    for(let i =0;i<arr.length;i++){
         for(let j =0;j<tokens.length;j++){
            if(arr[j]==arr[j+1] && arr[j]=='^'||arr[j]=='*'||arr[j]=='/'||arr[j]=='%'||arr[j]=='+'||arr[j]=='-') return NaN;
            if(arr[i]==tokens[j]){
                console.log(" i am in")
                if(arr[i]=='^'){
                 sum = Math.pow(tokens[j-1],tokens[j+1]);
                 tokens.splice(j-1,3,sum);
                }
                if(arr[i]=='*'){
                    sum = tokens[j-1] * tokens[j+1];
                    tokens.splice(j-1,3,sum);
                }
                if(arr[i]=='/'){
                    sum = tokens[j-1]/tokens[j+1];
                    tokens.splice(j-1,3,sum);
                }
                if(arr[i]=='%'){
                    sum = tokens[j-1]%tokens[j+1];
                    tokens.splice(j-1,3,sum);
                }
                if(arr[i]=='+'){
                    console.log("hii i am in")
                    sum = Number(tokens[j-1])+Number(tokens[j+1]);
                    console.log("hii i am in "+ sum)
                    tokens.splice(j-1,3,sum);
                    console.log("token "+tokens)
                }
                if(arr[i]=='-'){
                    sum = tokens[j-1]-tokens[j+1];
                    tokens.splice(j-1,3,sum);
                }
            }
         }
    }
    return tokens[0];
}
function solve(){
    console.log("inside");
const ans =  document.getElementById('result');
//ans.focus();
let val =calculate(seperate(ans.value));
console.log("val"+val)
document.getElementById("result").value=val;
// ans.addEventListener('input', function() {
//     document.getElementById('result').innerHTML = "The answer is " + calculate(tokenize(ans.value));
// });
}

