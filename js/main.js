const radios=document.querySelectorAll(".tip");
const customTipR= document.querySelector("#custom");
const customTipI=document.querySelector("#tipInput");

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
}

function customTipField(e){
    radios.forEach(b =>{
        b.checked=false; 
    });
    customTipR.checked = true;
}