function Archer(name, gender)
{
    Player.call(this, name, gender);
    this.BaseWeapon = getWeaponForPlayer("Archer")
}
Archer.prototype = Object.create(Player,prototype);
Archer.prototype.constructor = Magician;
Archer.prototype.Attack = function () {
    return "The Archer " + Player.prototype.Attack.call(this)}