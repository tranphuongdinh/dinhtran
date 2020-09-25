function hint() {
    if (hintPress) {
        if (countHint >= 0) {
            alert('THE WORD HAS THE LETTER ' + wordToFind[randomIntFromRange(0, wordToFind.length - 1)] + ' (HINTS LEFT ' + countHint.toString() + ')');
            countHint--;
        }
        else 
            alert('NO MORE HINTS LEFT');
    }
}

function gameFinished() {
    hintPress = false;
    for (i = 0; i < isPressed.length; i++)
        isPressed[i] = true;
}

function draw(countWrong) {
    switch(countWrong) {
        case 1: cMainScreen.drawImage(giaTreoCo, 0, 0); break;
        case 2: cMainScreen.drawImage(step1, 0, 0); break;
        case 3: cMainScreen.drawImage(step2, 0, 0); break;
        case 4: cMainScreen.drawImage(step3, 0, 0); break;
        case 5: cMainScreen.drawImage(step4, 0, 0); break;
        case 6: cMainScreen.drawImage(step5, 0, 0); break;
        case 7: cMainScreen.drawImage(step6, 0, 0); break;
    }
    requestAnimationFrame(draw);
}

draw(countWrong);

function drawLoseAndWin(win, lose) {
    document.getElementById('win').innerHTML = win;
    document.getElementById('lose').innerHTML = lose;
}

drawLoseAndWin(win, lose);

function pickLetterA() {
    if (isPressed[0] === false) {
        activeChoice = document.getElementById('btnA').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[0] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[0] = true;
        } 
        else correctSound.play();
        
        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterB() {
    if (isPressed[1] === false) {
        activeChoice = document.getElementById('btnB').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[1] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[1] = true;
        }
        else correctSound.play();
    
        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterC() {
    if (isPressed[2] === false) {
        activeChoice = document.getElementById('btnC').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[2] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[2] = true;
        }
        else correctSound.play();
    
        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterD() {
    if (isPressed[3] === false) {
        activeChoice = document.getElementById('btnD').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[3] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[3] = true;
        }
        else correctSound.play();
    
        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterE() {
    if (isPressed[4] === false) {
        activeChoice = document.getElementById('btnE').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[4] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[4] = true;
        }
        else correctSound.play();
    
        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterF() {
    if (isPressed[5] === false) {
        activeChoice = document.getElementById('btnF').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[5] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[5] = true;
        }
        else correctSound.play();
    
        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterG() {
    if (isPressed[6] === false) {
        activeChoice = document.getElementById('btnG').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[6] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[6] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterH() {
    if (isPressed[7] === false) {
        activeChoice = document.getElementById('btnH').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[7] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[7] = true;
        }
        else correctSound.play();
    
        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterI() {
    if (isPressed[8] === false) {
        activeChoice = document.getElementById('btnI').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[8] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[8] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterJ() {
    if (isPressed[9] === false) {
        activeChoice = document.getElementById('btnJ').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[9] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[9] = true;
        }
        else correctSound.play();
    
        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterK() {
    if (isPressed[10] === false) {
        activeChoice = document.getElementById('btnK').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[10] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[10] = true;
        }
        else correctSound.play();
    
        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterL() {
    if (isPressed[11] === false) {
        activeChoice = document.getElementById('btnL').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[11] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[11] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterM() {
    if (isPressed[12] === false) {
        activeChoice = document.getElementById('btnM').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[12] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[12] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterN() {
    if (isPressed[13] === false) {
        activeChoice = document.getElementById('btnN').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[13] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[13] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterO() {
    if (isPressed[14] === false) {
        activeChoice = document.getElementById('btnO').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[14] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[14] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterP() {
    if (isPressed[15] === false) {
        activeChoice = document.getElementById('btnP').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[15] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[15] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterQ() {
    if (isPressed[16] === false) {
        activeChoice = document.getElementById('btnQ').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[16] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[16] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterR() {
    if (isPressed[17] === false) {
        activeChoice = document.getElementById('btnR').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[17] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[17] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterS() {
    if (isPressed[18] === false) {
        activeChoice = document.getElementById('btnS').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[18] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[18] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterT() {
    if (isPressed[19] === false) {
        activeChoice = document.getElementById('btnT').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[19] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[19] = true;
        }
        else correctSound.play();
    
        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterU() {
    if (isPressed[20] === false) {
        activeChoice = document.getElementById('btnU').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[20] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[20] = true;
        }
        else correctSound.play();
    
        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterV() {
    if (isPressed[21] === false) {
        activeChoice = document.getElementById('btnV').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[21] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[21] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterW() {
    if (isPressed[22] === false) {
        activeChoice = document.getElementById('btnW').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[22] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[22] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterX() {
    if (isPressed[23] === false) {
        activeChoice = document.getElementById('btnX').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[23] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[23] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterY() {
    if (isPressed[24] === false) {
        activeChoice = document.getElementById('btnY').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[24] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[24] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            gameFinished();
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}

function pickLetterZ() {
    if (isPressed[25] === false) {
        activeChoice = document.getElementById('btnZ').innerHTML;
        var isCorrect = false;
        var count = 0;
    
        for (i = 0; i < wordToFind.length; i++) {
            if (activeChoice === wordToFind[i]) {
                document.getElementById('letter' + i.toString()).innerHTML = wordToFind[i];
                countRight++;
                isCorrect = true;
                isPressed[25] = true;
            }
        }
    
        if(countRight === wordToFind.length) {
            gameFinished();
            winSound.play();
            win++;
            drawLoseAndWin(win, lose);
        }
    
        if (isCorrect === false) {
            nopeSound.play();
            countWrong++;
            document.getElementById("wrongWordList").innerHTML += activeChoice + " ";
            isPressed[25] = true;
        }
        else correctSound.play();

        if(countWrong === 7) {
            gameFinished();
            alert('THE WORD IS: ' + wordToFind + '. BETTER NEXT TIME! PRESS NEW BUTTON TO START NEW GAME!');
            loseSound.play();
            lose++;
            drawLoseAndWin(win, lose);
        }
        
        draw(countWrong);
    }
}