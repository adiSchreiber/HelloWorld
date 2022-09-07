function CreatePlayerFromDom(){
    var name = document.getElementById('player-name').value;
    var gender = document.getElementById('input[name="gender"]:checked').value;
    var typeElement = document.getElementById('player-type');
    var selectedType = typeElement.options[typeElement.selectedIndex].value.toLowerCase();
    var player = createPlayer(selectedType, gender, name);

}