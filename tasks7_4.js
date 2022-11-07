function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
} // метод, который определяет прибор как включенный в розетку

ElectricalAppliance.prototype.plugIn = function () {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
}

ElectricalAppliance.prototype.getPowerUsed = function () {
    return this.isPlugged ? this.power : 0;
}


const lampa = new ElectricalAppliance('lampa', 50);
const recorder = new ElectricalAppliance('recorder', 700);

console.log(lampa.getPowerUsed() + recorder.getPowerUsed());

lampa.plugIn();
console.log(lampa.getPowerUsed() + recorder.getPowerUsed());

recorder.plugIn();
console.log(lampa.getPowerUsed() + recorder.getPowerUsed());

recorder.plugIn();
console.log(lampa.getPowerUsed() + recorder.getPowerUsed());