let maxVal=(a,b)=>{
    if(a>b)
        return a;
    else
        return b;
}
a=+prompt("enter a value1:");
b=+prompt("enter a value2:");
alert(`The maximum value is: ${maxVal(a,b)}`);