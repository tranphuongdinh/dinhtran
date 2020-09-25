//VARIABLES
let calculation
let result 
let calculationScreen = document.querySelector('#calculation')
let resultScreen = document.querySelector('#result')
let tempTray
let startIndex 
let temp
let equalPressed = false
const pressSound = new Audio('sounds/press.wav')

//INITIALIZATION
const init = () => {calculation = ""; result = ""; tempTray = []; startIndex = 0; temp = 0; equalPressed = false; calculationScreen.textContent = "0";}
const ACinit = () => {init(); resultScreen.textContent = "0"; pressSound.play()}

init(); resultScreen.textContent = "0"

const isValid = (calculation) => {
    valid = true
    var lastChar = calculation[calculation.length - 1]
    if (calculation[0] === 'x' || calculation[0] === ':' || calculation[0] === '%' || calculation[0] === '.') valid = false

    if (lastChar === 'x' || lastChar === ':' || lastChar === '%' || lastChar === '.' || lastChar === '+' || lastChar === '-') valid = false

    if (calculation.length >= 2)
        for (var i = 0; i < calculation.length - 1; i++)
            if ((calculation[i] < '0' || calculation[i] > '9') && (calculation[i + 1] < '0' || calculation[i + 1] > '9')) valid = false
    
    return valid
}

//CHECK
const lastCharIsANumber = (calculation) => {
    const lastChar = calculation[calculation.length - 1]
    if ((lastChar < '0' || lastChar > '9') && lastChar != '.') return false
    return true
}

//BUTTON EVENTS
const get0 = () => {if(equalPressed){init()} calculation += '0'; calculationScreen.textContent = calculation; pressSound.play()}
const get1 = () => {if(equalPressed){init()} calculation += '1'; calculationScreen.textContent = calculation; pressSound.play()}
const get2 = () => {if(equalPressed){init()} calculation += '2'; calculationScreen.textContent = calculation; pressSound.play()}
const get3 = () => {if(equalPressed){init()} calculation += '3'; calculationScreen.textContent = calculation; pressSound.play()}
const get4 = () => {if(equalPressed){init()} calculation += '4'; calculationScreen.textContent = calculation; pressSound.play()}
const get5 = () => {if(equalPressed){init()} calculation += '5'; calculationScreen.textContent = calculation; pressSound.play()}
const get6 = () => {if(equalPressed){init()} calculation += '6'; calculationScreen.textContent = calculation; pressSound.play()}
const get7 = () => {if(equalPressed){init()} calculation += '7'; calculationScreen.textContent = calculation; pressSound.play()}
const get8 = () => {if(equalPressed){init()} calculation += '8'; calculationScreen.textContent = calculation; pressSound.play()}
const get9 = () => {if(equalPressed){init()} calculation += '9'; calculationScreen.textContent = calculation; pressSound.play()}
const getDot = () => {if(equalPressed){init()} calculation += '.'; calculationScreen.textContent = calculation; pressSound.play()}

const backSpace = () => {
    if (equalPressed) {
        init();
    }
    else {
        if(!lastCharIsANumber(calculation)) {
            if (tempTray.length > 1)
                tempTray.splice(tempTray.length - 1, 1)
            else return
            startIndex = 0
        }
        calculation = calculation.slice(0, calculation.length - 1); 
        calculationScreen.textContent = calculation;
        if (calculation === "") {resultScreen.textContent = "0"; init()}
    }
    pressSound.play()
}

const add = () => {
    if(!isValid(calculation)) {
        alert('INVALID SYNTAX!')
        return
    }
    else {
        equalPressed = false
        if (calculation === "")
        {
            calculation = '0+'
            tempTray.push(Number.parseFloat('0'))
        }
        else
            calculation += '+'

        tempTray.push(Number.parseFloat(calculation.slice(startIndex, calculation.length)));

        console.log(tempTray)

        if (tempTray.length > 1) {
            if (calculation[startIndex - 1] === '+')
                temp = tempTray[0] + tempTray[1]
            else if (calculation[startIndex - 1] === '-')
                temp = tempTray[0] - tempTray[1]
            else if (calculation[startIndex - 1] === 'x')
                temp = tempTray[0] * tempTray[1]
            else if (calculation[startIndex - 1] === ':')
                temp = tempTray[0] / tempTray[1]
            else if (calculation[startIndex - 1] === '%')
                temp = tempTray[0] % tempTray[1]

            tempTray = []
            tempTray[0] = temp
        }

        startIndex = calculation.lastIndexOf('+') + 1;
        calculationScreen.textContent = calculation 
        if (temp === NaN) resultScreen.textContent = "ERROR"
        else resultScreen.textContent = temp   
        pressSound.play()   
    } 
}

const minus = () => {
    if(!isValid(calculation)) {
        alert('INVALID SYNTAX!')
        return
    }
    else 
    {
        equalPressed = false
        if (calculation === "")
        {
            calculation = '0-'
            tempTray.push(Number.parseFloat('0'))
        }
        else
            calculation += '-'

        tempTray.push(Number.parseFloat(calculation.slice(startIndex, calculation.length)));

        if (tempTray.length > 1) {
            if (calculation[startIndex - 1] === '+')
                temp = tempTray[0] + tempTray[1]
            else if (calculation[startIndex - 1] === '-')
                temp = tempTray[0] - tempTray[1]
            else if (calculation[startIndex - 1] === 'x')
                temp = tempTray[0] * tempTray[1]
            else if (calculation[startIndex - 1] === ':')
                temp = tempTray[0] / tempTray[1]
            else if (calculation[startIndex - 1] === '%')
                temp = tempTray[0] % tempTray[1]

            tempTray = []
            tempTray[0] = temp
        }

        startIndex = calculation.lastIndexOf('-') + 1;
        calculationScreen.textContent = calculation 
        if (temp === NaN) resultScreen.textContent = "ERROR"
        else resultScreen.textContent = temp   
        pressSound.play()
    }
}

const multiply = () => {
    if(!isValid(calculation)) {
        alert('INVALID SYNTAX!')
        return
    }
    else {
        equalPressed = false
        calculation += 'x'

        tempTray.push(Number.parseFloat(calculation.slice(startIndex, calculation.length)));

        console.log(tempTray)

        if (tempTray.length > 1) {
            if (calculation[startIndex - 1] === '+')
                temp = tempTray[0] + tempTray[1]
            else if (calculation[startIndex - 1] === '-')
                temp = tempTray[0] - tempTray[1]
            else if (calculation[startIndex - 1] === 'x')
                temp = tempTray[0] * tempTray[1]
            else if (calculation[startIndex - 1] === ':')
                temp = tempTray[0] / tempTray[1]
            else if (calculation[startIndex - 1] === '%')
                temp = tempTray[0] % tempTray[1]

            tempTray = []
            tempTray[0] = temp
        }

        startIndex = calculation.lastIndexOf('x') + 1;
        calculationScreen.textContent = calculation 
        if (temp === NaN) resultScreen.textContent = "ERROR"
        else resultScreen.textContent = temp   
        pressSound.play()
    } 
}

const devide = () => {
    if(!isValid(calculation)) {
        alert('INVALID SYNTAX!')
        return
    }
    else {
        equalPressed = false
        calculation += ':'

        tempTray.push(Number.parseFloat(calculation.slice(startIndex, calculation.length)));

        console.log(tempTray)

        if (tempTray.length > 1) {
            if (calculation[startIndex - 1] === '+')
                temp = tempTray[0] + tempTray[1]
            else if (calculation[startIndex - 1] === '-')
                temp = tempTray[0] - tempTray[1]
            else if (calculation[startIndex - 1] === 'x')
                temp = tempTray[0] * tempTray[1]
            else if (calculation[startIndex - 1] === ':')
                temp = tempTray[0] / tempTray[1]
            else if (calculation[startIndex - 1] === '%')
                temp = tempTray[0] % tempTray[1]

            tempTray = []
            tempTray[0] = temp
        }

        startIndex = calculation.lastIndexOf(':') + 1;
        calculationScreen.textContent = calculation 
        if (temp === NaN) resultScreen.textContent = "ERROR"
        else resultScreen.textContent = temp   
        pressSound.play()
    } 
}

const mod = () => {
    if(!isValid(calculation)) {
        alert('INVALID SYNTAX!')
        return
    }
    else {
        equalPressed = false
        calculation += '%'

        tempTray.push(Number.parseFloat(calculation.slice(startIndex, calculation.length)));

        console.log(tempTray)

        if (tempTray.length > 1) {
            if (calculation[startIndex - 1] === '+')
                temp = tempTray[0] + tempTray[1]
            else if (calculation[startIndex - 1] === '-')
                temp = tempTray[0] - tempTray[1]
            else if (calculation[startIndex - 1] === 'x')
                temp = tempTray[0] * tempTray[1]
            else if (calculation[startIndex - 1] === ':')
                temp = tempTray[0] / tempTray[1]
            else if (calculation[startIndex - 1] === '%')
                temp = tempTray[0] % tempTray[1]

            tempTray = []
            tempTray[0] = temp
        }

        startIndex = calculation.lastIndexOf('%') + 1;
        calculationScreen.textContent = calculation 
        if (temp === NaN) resultScreen.textContent = "ERROR"
        else resultScreen.textContent = temp    
        pressSound.play()
    } 
}

const equal = () => {
    if(!isValid(calculation) || calculation === "") {
        alert('INVALID SYNTAX!')
        return
    }
    else {
        calculation += '='

        tempTray.push(Number.parseFloat(calculation.slice(startIndex, calculation.length)));

        if (tempTray.length > 1) {
            if (calculation[startIndex - 1] === '+')
                temp = tempTray[0] + tempTray[1]
            else if (calculation[startIndex - 1] === '-')
                temp = tempTray[0] - tempTray[1]
            else if (calculation[startIndex - 1] === 'x')
                temp = tempTray[0] * tempTray[1]
            else if (calculation[startIndex - 1] === ':')
                temp = tempTray[0] / tempTray[1]
            else if (calculation[startIndex - 1] === '%')
                temp = tempTray[0] % tempTray[1]

            tempTray = []
            tempTray[0] = temp
        }
        else
        {
            calculation = '0+' + calculation.slice(startIndex, calculation.length)
            tempTray.unshift(Number.parseFloat('0'))
            console.log(tempTray)
            temp = tempTray[0] + tempTray[1]
            tempTray.shift();
        }

        startIndex = 0
        calculationScreen.textContent = calculation 
        if (temp === NaN) resultScreen.textContent = "ERROR"
        else resultScreen.textContent = temp   
        calculation = temp.toString();
        equalPressed = true
        pressSound.play()
    } 
}