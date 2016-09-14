var hours = process.argv[2];
var minutes = process.argv[3];

// Немного замечательного кода и магии
function getRomanTime(hours, minutes) {
    function convertNumberToRoman(n) {
        var romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
            romanDecimals = ['X', 'XX', 'XXX', 'LX', 'L'],
            isDecimal = !(n % 10),
            isZero = !parseInt(n),
            romanNumber ='';

        romanNumber += romanDecimals[Math.floor(n / 10) - 1];
        if (!isDecimal) {
            romanNumber += romanNumerals[Math.floor(n % 10) - 1];
        };
        isZero && (romanNumber = 'nulla');
        return romanNumber;
    }

    if (hours > 24 || hours < 0 || minutes > 60 || minutes < 0) {
        console.log('Please enter a valid time number: [0-24] for hours, [0-59] for minutes.');
    }
    else console.log(convertNumberToRoman(hours) + ':' + convertNumberToRoman(minutes));
}

getRomanTime(hours, minutes);
