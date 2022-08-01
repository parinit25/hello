var str = "abcba";
var stack =[];
var top = stack.length-1;
for (var i=0;i<str.length;i++)
{
    if(stack.length<2) 
    {
        stack.push(str[i]);
        console.log(stack);
    }
    for(var j=0;j<stack.length;j++)
    {

        if(stack[top]===stack.pop())
       {
        stack.pop();
        console.log("else"+stack);
       }
    }
    else
    {
    stack.push(str[i]);
    console.log("last condition "+stack);
    }
    }

