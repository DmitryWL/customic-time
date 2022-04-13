module.exports = class Patterns {
    static patterns = {
        "europe": {
            time: "%H:%M",
            fullTime: "%H:%M:%S",
            date: "%d.%m.%y"
        },
        "us": {
            time: "%H:%M%mer",
            fullTime: "%H:%M:%S",
            date: "%d/%m/%y"
        }
    }
}