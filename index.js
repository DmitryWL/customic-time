const { Time, Patterns, Stringifyer } = require("./src");

module.exports = class CustomTime {
    constructor({
        fillToTwoSymbols,
        format,
        type
    }) {
        this._fillToTwoSymbols = typeof fillToTwoSymbols === "undefined" ? true : fillToTwoSymbols;
        this._format = typeof format === "undefined" ? "europe" : format;
        this._type = typeof type === "undefined" ? "UNIX" : type;
        this._stringifyer = new Stringifyer(this._fillToTwoSymbols);
    }

    getTime(date) {
        const time = new Time(date);
        const pattern = Patterns.patterns[this._format].time;
        return this._stringifyer.setFields(time, pattern);
    }

    getFullTime(date) {
        const time = new Time(date, this._type);
        const pattern = Patterns.patterns[this._format].fullTime;
        return this._stringifyer.setFields(time, pattern);
    }

    msToHuman(ms) {
        const time = new Time(ms, this._type);
        const pattern = Patterns.patterns[this._format].time;
        return this._stringifyer.setFields(time, pattern);
    }
}