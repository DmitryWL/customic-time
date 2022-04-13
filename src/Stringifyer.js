module.exports = class Stringifyer {
    constructor(fillToTwoSymbols = true) {
        this.fill = fillToTwoSymbols;
    }

    _fix(num) {
        num = String(num);
        if (this.fill)
        return num.length === 2 ? num : 0 + num;
        return num;
    }

    setFields(time, pattern) {
        return pattern.replace(/%mer/, "")
        .replace(/%H/g, this._fix(time.hours))
        .replace(/%M/g, this._fix(time.minutes))
        .replace(/%S/g, this._fix(time.seconds))
        .replace(/%d/g, this._fix(time.day))
        .replace(/%m/g, this._fix(time.month))
        .replace(/%y/, time.year);
    }
}
// "%H:%M%mer",
//             fullTime: "%H:%M:%S",
//             date: "%d/%m/%y"