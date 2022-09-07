function TwoHandedBluntWeapon()
{
    BaseWeapon.call(this, "6", "TwoHandedBluntWeapon");
    this.Attck = function(){return "Boomm";}
}
TwoHandedBluntWeapon.prototype = Object.create(BaseWeapon.prototype);
TwoHandedBluntWeapon.prototype.constructor = TwoHandedBluntWeapon;
