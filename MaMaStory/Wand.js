function Wand()
{
    BaseWeapon.call(this, "6", "wand");
    this.Attck = function(){return "Fshhhh";}
}
Wand.prototype = Object.create(BaseWeapon.prototype);
Wand.prototype.constructor = Wand;