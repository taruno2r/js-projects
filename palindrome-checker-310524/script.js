const input=document.getElementById("input");

function reverseStr(str)
{
  return str.split("").reverse().join("");
}

function check()
{
  const value=input.value;
  const reverse=reverseStr(value);
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