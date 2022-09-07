function ()
{
    BaseWeapon.call(this, "6", "TwoHandedAxe");
    this.Attck = function(){return "Achtshhhh";}
}
TwoHandedAxe.prototype = Object.create(BaseWeapon.prototype);
ד