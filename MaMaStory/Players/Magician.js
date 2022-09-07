function Magician(name, gender)
{
    Player.call(this, name, gender);
    this.BaseWeapon = getWeaponForPlayer("Magician")

}
Magician.prototype = Object.create(Player,prototype);
Magician.prototype.constructor = Magician;
Magician.prototype.Attack = function () {
    return "The Magician " + Player.prototype.Attack.call(this)}