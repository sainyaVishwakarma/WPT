var a=3;
var b=4;
var symbol="+";
switch(symbol)
{
    case "+":
             console.log("sum =",a+b);
             break;
    case "-":
             console.log("subtraction =",a-b);
             break;
    case "*":
             console.log("multiplication=",a*b);
             break;
    case "/":
             console.log("division=",a/b);
             break; 
    case "%":
             console.log("mod=",a%b);
             break;         
    default:
             console.log("invalid");
             break;                 
}