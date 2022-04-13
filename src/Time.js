module.exports = class Time {
    static countsMs = {
        second: 1000,
        minute: 60000,
        hour: 3600000,
        day: 86400000,
        week: 604800000,
        month: 2592000000,
        year: 31536000000
    }

    constructor(time = new Date().getTime(), type = "UNIX") {
        this._time = time;
        if (type === "UNIX") {
            this._date = new Date(this._time);
            this.year = this._date.getFullYear();
            this.month = this._date.getMonth() + 1;
            this.day = this._date.getDate();
            this.hours = this._date.getHours();
            this.minutes = this._date.getMinutes();
            this.seconds = this._date.getSeconds();
            this.ms = this._date.getMilliseconds();
        } else if (type === "ms") {
            this.year = Math.floor(time / Time.countsMs.year);
            time -= this.year * Time.countsMs.year;
            console.log(time);
            this.month = Math.floor(time / Time.countsMs.month);
            time -= this.month * Time.countsMs.month;
            this.day = Math.floor(time / Time.countsMs.day);
            time -= this.day * Time.countsMs.day;
            this.hours = Math.floor(time / Time.countsMs.hour);
            time -= this.hours * Time.countsMs.hour;
            this.minutes = Math.floor(time / Time.countsMs.minute);
            time -= this.minutes * Time.countsMs.minute;
            this.seconds = Math.floor(time / Time.countsMs.second);
            time -= this.seconds * Time.countsMs.second;
            this.ms = time;
        }
    }
}