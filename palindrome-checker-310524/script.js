const input=document.getElementById("input");


// METHOD 1
// function reverseStr(str)
// {
//   return str.split("").reverse().join("");
// }

// METHOD 2
let reverse;

function reverseStr(str)
{
  let splitStr=str.split("");
  let reverse="";
  for(let i=str.length-1;i>=0;i--)
    {
      reverse+=splitStr[i];
    }
  return reverse;
}

function check()
{
  const value=input.value;
  reverse=reverseStr(value);
  if (value===null || value==="")
    {
      alert("Enter something");
    }
    else if (value===reverse)
    {
      alert("It is a palindrome")
    }
    else alert("Not a palindrome");

    input.value="";
}