function Player(gender, name)
{
    this.BaseWeapon = new BaseWeapon("1","base");
    this.Gender = gender;
    this.Name = name;
}
Player.prototype.Attack = function() {
    return this.Name +
     " attacked with " +
      this.BaseWeapon.Damage +
       " damage! " + 
       this.BaseWeapon.Attack();
};