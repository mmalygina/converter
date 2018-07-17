function Converter() {
    this.temp = 0,
    this.type = 'F'
}

Converter.prototype.getTemp = function () {
    return this.temp;
}

Converter.prototype.setTemp = function (temp, type) {
    this.temp = temp;
    this.type = type;
}

// T(°C) = (T(°F) - 32) × 5/9
// T(°F) = T(°C) × 9/5 + 32
Converter.prototype.convert = function (temp, type) {
    if(type === 'F'){
        const t = Math.round((temp - 32)*(5/9));
        this.setTemp(t, 'C');
    } else {
        const t = Math.round(temp * (9/5) + 32);
        this.setTemp(t, 'F');
    }
    return this.temp;
}

module.exports = Converter;