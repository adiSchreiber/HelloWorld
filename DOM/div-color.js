function MyFunction(div)
{
    
    const color = div.dataset.color;
    alert(color)
}
console.log("hiiiii")


window.addEventListener("load", function(){
    divs = document.getElementsByTagName("div");
    for(div of divs)
    {
        div.addEventListener('click',()=>MyFunction(div))
    }
})


