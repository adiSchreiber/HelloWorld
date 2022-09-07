function Warrior(name, gender)
{
    Player.call(this, name, gender);
    this.BaseWeapon = getWeaponForPlayer("warrior")
}
Warrior.prototype = Object.create(Player,prototype);
Warrior.prototype.constructor = Warrior;
Warrior.prototype.Attack = function () {
    return "The warrior " + Player.prototype.Attack.call(this)}