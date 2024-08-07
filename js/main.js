const radios=document.querySelectorAll(".tip");
const customTipR= document.querySelector("#custom");
const customTipI=document.querySelector("#tipInput");

const tipAmt=document.getElementById("tip-amt");
const tipTotal=document.getElementById("tip-total");


const billAmt=document.getElementById("bill-amt");
const people=document.getElementById("numberOfPeople");
const peopleCount=document.getElementById("people-count");
const errMsg=document.querySelector(".warning");

radios.forEach(radio =>{
    radio.addEventListener("change",check);
});

customTipI.addEventListener("focus",customTipField);

function check(e){
    radios.forEach(b =>{
        b.checked=false; 
    });
    e.target.checked = true;

    custom
    if(e.target === customTipR){
        customTipI.focus();
    }
    tipAmt.innerHTML= billAmt.value * e.target.value /100;
}

function customTipField(e){
    radios.forEach(b =>{
        b.checked=false; 
    });
    customTipR.checked = true;
}

people.addEventListener("keyup",()=>{
    console.log(errMsg);
    if(people.value > 0){
        errMsg.classList.add("error");
    }else if(people.value == 0){
        errMsg.classList.remove("error");
    }
    tipTotal.innerHTML =((parseFloat(billAmt.value) + parseFloat(tipAmt.innerHTML))/people.value).toFixed(2);
})





