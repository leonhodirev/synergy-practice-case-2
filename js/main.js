let day = prompt("Какой у вас день рождения?");
let month = prompt("Какой у вас месяц рождения? (Цифрой)");
let year = prompt("Какой у вас год рождения?");
if (day.length === 1) {
    day = "0" + day;
}
if (month.length === 1) {
    month = "0" + month;
}
let date = new Date(year + "-" + month + "-" + day);

document.getElementById("date").textContent = date.toLocaleDateString();
document.getElementById("day").textContent = getDayOfWeek(date);
document.getElementById("visokos").textContent = getLeapYear(date) ? "Да" : "Нет";
document.getElementById("age").textContent = getAge(date);
console.log(getTable(date));

// Functions Start

function getDayOfWeek(date) {
    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];

    return days[date.getDay()];
}

function getLeapYear(date) {
    let year = date.getFullYear();
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

function getAge(date) {
    let today = new Date();
    let age = today.getFullYear() - date.getFullYear();
    let m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
        age--;
    }

    return age;
}

function getTable(date) {
    let numbers = [
        [
            '             *             ',
            '            ***            ',
            '           ** **           ',
            '          *** ***          ',
            '          **   **          ',
            '          **   **          ',
            '          *** ***          ',
            '           ** **           ',
            '            ***            ',
            '             *             '
        ],
        [
            '             **            ',
            '           ****            ',
            '           ****            ',
            '             **            ',
            '             **            ',
            '             **            ',
            '             **            ',
            '             **            ',
            '           *****           ',
            '           *****           '
        ],
        [
            '           *****           ',
            '           *****           ',
            '               *           ',
            '              **           ',
            '             ***           ',
            '            ***            ',
            '           ***             ',
            '          ***              ',
            '          ******           ',
            '          ******           '
        ],
        [
            '            ***            ',
            '           *****           ',
            '           *  **           ',
            '             ***           ',
            '           ****            ',
            '           *****           ',
            '              **           ',
            '           * ***           ',
            '           *****           ',
            '           ***             '
        ],
        [
            '             ***           ',
            '            ****           ',
            '           *****           ',
            '           *****           ',
            '          *****            ',
            '          *******          ',
            '          *******          ',
            '              **           ',
            '              **           ',
            '              **           '
        ],
        [
            '           *****           ',
            '           *****           ',
            '           **              ',
            '           **              ',
            '           *****           ',
            '            ****           ',
            '              **           ',
            '             ***           ',
            '           *****           ',
            '           ***             '
        ],
        [
            '             ***           ',
            '           *****           ',
            '           **  *           ',
            '          *****            ',
            '          ******           ',
            '          *** ***          ',
            '          *** ***          ',
            '          *** **           ',
            '           *****           ',
            '            ***            '
        ],
        [
            '           ******          ',
            '           ******          ',
            '               **          ',
            '              **           ',
            '             ***           ',
            '            ***            ',
            '            **             ',
            '           ***             ',
            '           ***             ',
            '           ***             '
        ],
        [
            '            **             ',
            '           *****           ',
            '           ** **           ',
            '           *****           ',
            '           *****           ',
            '           ******          ',
            '          *** ***          ',
            '          *** ***          ',
            '           *****           ',
            '             **            '
        ],
        [
            '            ***            ',
            '           *****           ',
            '           *****           ',
            '          *** ***          ',
            '          *** ***          ',
            '           ******          ',
            '            *****          ',
            '           * ***           ',
            '           *****           ',
            '           ***             '
        ],
    ];
    let string = date.toLocaleDateString().replaceAll(".", "");
    let result = "";

    for (let p = 0; p <= 9; p++) {
        for (let i = 0; i < string.length; i++) {
            if (numbers[string.charAt(i)][p]) {
                result += numbers[string.charAt(i)][p];
                if (i === 1 || i === 3) {
                    result += "/";
                }
            }
        }

        result += "\n";
    }

    return result;
}