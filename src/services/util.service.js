
export function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}


export function getDayName(date, locale = 'en') {
    date = new Date(date)
    return date.toLocaleDateString(locale, { weekday: 'long' })
}

export function getMonthName(date) {
    date = new Date(date)
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ]
    return monthNames[date.getMonth()]
}

export function getSeasonName(date) {
    date = new Date(date)
    const seasonsNames = ['winter', 'spring', 'summer', 'autumn']
    return seasonsNames[Math.floor((date.getMonth() / 12 * 4)) % 4]
}


export function padNum(num) {
    return (num > 9) ? num + '' : '0' + num
}

export function getTime(time) {
    var hour = time.getHours()
    var second = time.getSeconds()
    var minute = time.getMinutes()
    var newHour = padNum(hour)
    var newMinute = padNum(minute)
    var newSecond = padNum(second)

    return `${newHour}:${newMinute}:${newSecond}`
}