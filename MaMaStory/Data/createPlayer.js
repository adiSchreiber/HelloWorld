const createPlayer = (type,gender, name)=>{
    name = name.toLowerCase();
    if(type=="warrior")
    {
        return new Warrior(gender,name)
    }
    if(type=="Archer")
    {
        return new Archer(gender,name)
    }
    if(type=="magician")
    {
        return new Magician(gender,name)
    }
}

document.getElementById("create-button").addEventListener("click")


window.addEventListener("load", function(){
    
    divs = document.getElementsByTagName("div");
    for(div of divs)
    {
        div.addEventListener('click',()=>MyFunction(div))
    }
})
