
function Bow()
{
    BaseWeapon.call(this, "6", "Bow");
    this.Attck = function(){return "Shboinggg";}
}
Bow.prototype = Object.create(BaseWeapon.prototype);
Bow.prototype.constructor = Bow;
