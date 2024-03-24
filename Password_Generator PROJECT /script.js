let inputSlider = document.getElementById("InputSlider");
let sliderValue = document.getElementById("SliderValue");
let textBox = document.getElementById("TextBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let generateButton = document.getElementById("GenerateButton");
let CopyICON = document.getElementById("CopyICON");


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', ()=>{
    sliderValue.textContent = inputSlider.value;
})

generateButton.addEventListener('click', ()=>{
    textBox.value = generatePassword();   // generatePassword --> is a Function to generate the 'Password'. 
})


let The_LowChars = "abcdefghijklmnopqrstuvwxyz";
let The_UpChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let The_Numbers = "0123456789";
let The_Symbols = "@#$%^&*()";

function generatePassword()
{
    let Password = "";
    let FinalText = "";

    FinalText += lowercase.checked ? The_LowChars : "";
    FinalText += uppercase.checked ? The_UpChars : "";
    FinalText += numbers.checked ? The_Numbers : "";
    FinalText += symbols.checked ? The_Symbols : "";
    
    let i=1;
    while(i<=inputSlider.value){
        Password += FinalText.charAt(Math.floor(Math.random() * FinalText.length)); 
        i++;
    }
    return Password;
}

CopyICON.addEventListener('click', ()=>{
    if(textBox.value != "" || textBox.value.length >= 1)
    {
        navigator.clipboard.writeText(textBox.value);
        CopyICON.title = "Password Copied :  "+textBox.value;
        CopyICON.innerText="check";

        setTimeout(()=>{
            CopyICON.innerHTML="content_copy";          
        } , 3000)                               // 3000ms  ---> 3s
    }
});
