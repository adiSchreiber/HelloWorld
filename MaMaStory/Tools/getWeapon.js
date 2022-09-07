function getWeaponForPlayer(playerName)
{
    playerName = playerName.toLowerCase();
    var validWeaponsForPlayer = playerToWeapons[playerName];
    var length = validWeaponsForPlayer.length;
    var random = (Math.random()*length-1) +1;
    random  = parseInt(random,10);
    var weapon = validWeaponsForPlayer[random];
    return weapon;
}