let numbers = new Set()
    .add("B1")
    .add("B2")
    .add("B3")
    .add("B4")
    .add("B5")
    .add("B6")
    .add("B7")
    .add("B8")
    .add("B9")
    .add("B10")
    .add("B11")
    .add("B12")
    .add("B13")
    .add("B14")
    .add("B15")
    .add("I16")
    .add("I17")
    .add("I18")
    .add("I19")
    .add("I20")
    .add("I21")
    .add("I22")
    .add("I23")
    .add("I24")
    .add("I25")
    .add("I26")
    .add("I27")
    .add("I28")
    .add("I29")
    .add("I30")
    .add("N31")
    .add("N32")
    .add("N33")
    .add("N35")
    .add("N35")
    .add("N36")
    .add("N37")
    .add("N38")
    .add("N39")
    .add("N40")
    .add("N41")
    .add("N42")
    .add("N43")
    .add("N44")
    .add("N45")
    .add("G46")
    .add("G47")
    .add("G48")
    .add("G49")
    .add("G50")
    .add("G51")
    .add("G52")
    .add("G53")
    .add("G54")
    .add("G55")
    .add("G56")
    .add("G57")
    .add("G58")
    .add("G59")
    .add("G60")
    .add("O61")
    .add("O62")
    .add("O63")
    .add("O64")
    .add("O65")
    .add("O66")
    .add("O67")
    .add("O68")
    .add("O69")
    .add("O70")
    .add("O71")
    .add("O72")
    .add("O73")
    .add("O74")
    .add("O75")
 

//Sets to set to an array

let setToArray = Array.from(numbers);
let calledNumbers = new Set();
// declaring outPut Varible 

let outPut = document.getElementById('outPut');

// Button Functions

    let bingoNum = document.getElementById('bingoNums');
    bingoNum.innerHTML = 'Display Bingo Number';

    let callBingo = document.getElementById('callbingo');
    callBingo.innerHTML = 'Call Bingo';

//Displaying Random Bingo Number

bingoNum.addEventListener('click', () => {

    let randomNumber = Math.floor(Math.random() * numbers.size);
    let bingoNum = setToArray[randomNumber];
    let bingoNums = new Set();
    
    bingoNums.add(bingoNum);
    
    for(let num of bingoNums){
        outPut.innerHTML = num;
        calledNumbers.add(num);
    }

    calledNumbers.forEach(function(val) {
        if(calledNumbers.has(val) == bingoNum){
            calledNumbers.delete(val)
        };
    });

});

// Displaying Called Numbers and clearing

callBingo.addEventListener('click',()=>{
    outPut.innerHTML = '';

    for(let called of calledNumbers){
        outPut.innerHTML += called + '<br>';
    }
    calledNumbers.clear();
});
