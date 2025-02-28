const date = new Date();

function today(){
    return date;
}

function weekday(){
    const day = date.getDay();
    if (day == 1) {
        return 'monday';
    } else if (day == 2) {
        return 'tuesday';
    } else if (day == 3) {
        return 'wednesday';
    } else if (day == 4) {
        return 'thursday';
    } else if (day == 5) {
        return 'friday';
    } else if (day == 6) {
        return 'saturday';
    } else if (day == 7) {
        return 'sunday';
    } else {
        return 'error'
    }
    
}
module.exports = { today, weekday };