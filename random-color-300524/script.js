let body = document.getElementsByTagName("body")[0];

function changeColor(name)
{
  body.style.backgroundColor = name;
}

function randomColor()
{
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    body.style.backgroundColor=`rgb(${red}, ${green}, ${blue})`;
}