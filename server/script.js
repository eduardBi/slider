let slider=document.querySelector('#slider');
let round=document.querySelector('#round');
let sliderWidth=slider.getBoundingClientRect().width;
let roundWidth=round.getBoundingClientRect().width


slider.addEventListener('mousemove',(e)=>{
    e.stopPropagation();
    round.style.transform="translate("+(e.offsetX-roundWidth/2)+"px,0)"    
    let maxValue=slider.getAttribute("data-max")*1
    let minValue=slider.getAttribute("data-min")*1
    let step=slider.getAttribute("data-step")*1
    let range=maxValue-minValue;
    let persantegeOfsliderFill=e.offsetX/sliderWidth
    slider.value=Math.floor(minValue+persantegeOfsliderFill*range) 
    arraysValue.push(slider.value)
})

let arraysValue=[];
slider.addEventListener('click',(e)=>{
    
    console.log(arraysValue);
})
