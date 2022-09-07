function TwoHandedSword()
{
    BaseWeapon.call(this, "6", "TwoHandedSword");
    this.Attck = function(){return "Swinggg";}
}
TwoHandedSword.prototype = Object.create(BaseWeapon.prototype);
TwoHandedSword.prototype.constructor = Bow;
