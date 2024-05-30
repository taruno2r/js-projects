let donationAmountText = document.getElementById("amount");
let donateMessage = document.querySelector(".donate-success");
let donationAmount=0;
let number;
const button1=document.getElementById("button1");
const button2=document.getElementById("button2");
const button3=document.getElementById("button3");


function update(number){
    donationAmountText.innerText=number+"$";
    donationAmount=number;
}

function donate(){
    if(donationAmount===0)
        {
            donateMessage.style.display = 'block';
            donateMessage.innerText="Select the Amount to Donate."
        }
    else {
        donateMessage.style.display = 'block';
        donateMessage.innerText="Thanks for Donating "+donationAmount+"$";
        donationAmountText.innerText="0$";
        donationAmount=0;
    }
}