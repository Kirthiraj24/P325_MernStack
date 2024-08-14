// Variable declared using var has a global Scope
// were as the variable declares using let has a block scope

var str = "123"
alert(typeof(str))
// if(str>1) -> here the compiler itself implicitly converts the str to a number to complete the relational operation.
   
str = Number(str)
alert(typeof(str))

// task 27

var A = false
A = String(A);
alert(typeof(A))
A = Boolean(A)
alert(typeof(A))