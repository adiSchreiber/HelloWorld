window.addEventListener("load", function(){
    document.getElementById('create-button').addEventListener("click",createP)
})  
function CreatePlayerFromDom(){
    var name = document.getElementById('player-name').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var typeElement = document.getElementById('player-type');
    var selectedType = typeElement.options[typeElement.selectedIndex].value.toLowerCase();
    var player = createPlayer(selectedType, gender, name);
    return player;
}
const createPlayer = (type,gender, name)=>{
    name = name.toLowerCase();
    if(type=="warrior")
    {
        return new Warrior(gender,name); 
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

function createP() {
    var player = CreatePlayerFromDom();
    var div = document.createElement("div");
    var name = document.createElement("h2");
    var nameText = document.createTextNode(player.Name)
    name.appendChild(nameText);
    var button = document.createElement("button")
    var textButton = document.createTextNode("Attack");
    button.appendChild(textButton);
    button.addEventListener("click", function(){alert(player.Attack)})
    div.appendChild(name);
    div.appendChild(button)
    document.getElementById('players').appendChild(div);
}