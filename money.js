var money = 5;
var green = 0;

var paperCost = 5;
var paperOn = false;

var dogCost = 125;
var dogGreen = 25;
var dogOn = false;

var lawnCost = 570;
var lawnGreen = 152;
var lawnOn = false;

var snowCost = 1710;
var snowGreen = 570;
var snowOn = false;

var foodCost = 4300;
var foodGreen = 1720;
var foodOn = false;

var handyCost = 9675;
var handyGreen = 4515;
var handyOn = false;

var officeCost = 20370;
var officeGreen = 10864;
var officeOn = false;

var meetingsCost = 40740;
var meetingsGreen = 24444;
var meetingsOn = false;

var stocksCost = 78660;
var stocksGreen = 52440;
var stocksOn = false;

var cryptoCost = 147600;
var cryptoGreen = 108240;
var cryptoOn = false;


function buyPaper() {
    if (money >= paperCost) {
        money = money - paperCost;
        paperOn = true;

        document.getElementById("money").innerHTML = money;

        var unlockButton = document.querySelector('.unlock1');
        if (unlockButton) {
            unlockButton.textContent = "Job Unlocked!";
                unlockButton.disabled = true;

            var buttonStyles = window.getComputedStyle(unlockButton);
            
            unlockButton.style.color = buttonStyles.color;
            unlockButton.style.backgroundColor = buttonStyles.backgroundColor;
            unlockButton.style.fontFamily = buttonStyles.fontFamily;

        }
    }
}
function buyDogs() {
    if (money >= dogCost && green >= dogGreen) {
        money = money - dogCost;
        dogOn = true;

        document.getElementById("money").innerHTML = money;

        var unlockButton = document.querySelector('.unlock2');
        if (unlockButton) {
            unlockButton.textContent = "Job Unlocked!";
                unlockButton.disabled = true;

            var buttonStyles = window.getComputedStyle(unlockButton);
            
            unlockButton.style.color = buttonStyles.color;
            unlockButton.style.backgroundColor = buttonStyles.backgroundColor;
            unlockButton.style.fontFamily = buttonStyles.fontFamily;

        }
    }
}
function buyLawns() {
    if (money >= lawnCost && green >= lawnGreen) {
        money = money - lawnCost;
        lawnOn = true;

        document.getElementById("money").innerHTML = money;

        var unlockButton = document.querySelector('.unlock3');
        if (unlockButton) {
            unlockButton.textContent = "Job Unlocked!";
                unlockButton.disabled = true;

            var buttonStyles = window.getComputedStyle(unlockButton);
            
            unlockButton.style.color = buttonStyles.color;
            unlockButton.style.backgroundColor = buttonStyles.backgroundColor;
            unlockButton.style.fontFamily = buttonStyles.fontFamily;

        }
    }
}
function buySnow() {
    if (money >= snowCost && green >= snowGreen) {
        money = money - snowCost;
        snowOn = true;

        document.getElementById("money").innerHTML = money;

        var unlockButton = document.querySelector('.unlock4');
        if (unlockButton) {
            unlockButton.textContent = "Job Unlocked!";
                unlockButton.disabled = true;

            var buttonStyles = window.getComputedStyle(unlockButton);
            
            unlockButton.style.color = buttonStyles.color;
            unlockButton.style.backgroundColor = buttonStyles.backgroundColor;
            unlockButton.style.fontFamily = buttonStyles.fontFamily;

        }
    }
}
function buyFood() {
    if (money >= foodCost && green >= foodGreen) {
        money = money - foodCost;
        foodOn = true;

        document.getElementById("money").innerHTML = money;

        var unlockButton = document.querySelector('.unlock5');
        if (unlockButton) {
            unlockButton.textContent = "Job Unlocked!";
                unlockButton.disabled = true;

            var buttonStyles = window.getComputedStyle(unlockButton);
            
            unlockButton.style.color = buttonStyles.color;
            unlockButton.style.backgroundColor = buttonStyles.backgroundColor;
            unlockButton.style.fontFamily = buttonStyles.fontFamily;

        }
    }
}
function buyHandy() {
    if (money >= handyCost && green >= handyGreen) {
        money = money - handyCost;
        handyOn = true;

        document.getElementById("money").innerHTML = money;

        var unlockButton = document.querySelector('.unlock6');
        if (unlockButton) {
            unlockButton.textContent = "Job Unlocked!";
                unlockButton.disabled = true;

            var buttonStyles = window.getComputedStyle(unlockButton);
            
            unlockButton.style.color = buttonStyles.color;
            unlockButton.style.backgroundColor = buttonStyles.backgroundColor;
            unlockButton.style.fontFamily = buttonStyles.fontFamily;

        }
    }
}
function buyOffice() {
    if (money >= officeCost && green >= officeGreen) {
        money = money - officeCost;
        officeOn = true;

        document.getElementById("money").innerHTML = money;

        var unlockButton = document.querySelector('.unlock7');
        if (unlockButton) {
            unlockButton.textContent = "Job Unlocked!";
                unlockButton.disabled = true;

            var buttonStyles = window.getComputedStyle(unlockButton);
            
            unlockButton.style.color = buttonStyles.color;
            unlockButton.style.backgroundColor = buttonStyles.backgroundColor;
            unlockButton.style.fontFamily = buttonStyles.fontFamily;

        }
    }
}
function buyMeetings() {
    if (money >= meetingCost && green >= meetingGreen) {
        money = money - meetingCost;
        meetingOn = true;

        document.getElementById("money").innerHTML = money;

        var unlockButton = document.querySelector('.unlock8');
        if (unlockButton) {
            unlockButton.textContent = "Job Unlocked!";
                unlockButton.disabled = true;

            var buttonStyles = window.getComputedStyle(unlockButton);
            
            unlockButton.style.color = buttonStyles.color;
            unlockButton.style.backgroundColor = buttonStyles.backgroundColor;
            unlockButton.style.fontFamily = buttonStyles.fontFamily;

        }
    }
}
function buyStocks() {
    if (money >= stocksCost && green >= stocksGreen) {
        money = money - stocksCost;
        stocksOn = true;

        document.getElementById("money").innerHTML = money;

        var unlockButton = document.querySelector('.unlock9');
        if (unlockButton) {
            unlockButton.textContent = "Job Unlocked!";
                unlockButton.disabled = true;

            var buttonStyles = window.getComputedStyle(unlockButton);
            
            unlockButton.style.color = buttonStyles.color;
            unlockButton.style.backgroundColor = buttonStyles.backgroundColor;
            unlockButton.style.fontFamily = buttonStyles.fontFamily;

        }
    }
}
function buyCrypto() {
    if (money >= cryptoCost && green >= cryptoGreen) {
        money = money - cryptoCost;
        cryptoOn = true;

        document.getElementById("money").innerHTML = money;

        var unlockButton = document.querySelector('.unlock10');
        if (unlockButton) {
            unlockButton.textContent = "Job Unlocked!";
                unlockButton.disabled = true;

            var buttonStyles = window.getComputedStyle(unlockButton);
            
            unlockButton.style.color = buttonStyles.color;
            unlockButton.style.backgroundColor = buttonStyles.backgroundColor;
            unlockButton.style.fontFamily = buttonStyles.fontFamily;

        }
    }
}




function paperRoute() {
    if (paperOn === true) {
        money += 5;
        green += 1;
        document.getElementById("money").innerHTML = money;
        document.getElementById("green").innerHTML = green;
    }
}

function walkDog() {
    if (dogOn === true) {
        money += 10;
        green += 3;
        document.getElementById("money").innerHTML = money;
        document.getElementById("green").innerHTML = green;
    }
}

function mowLawns() {
    if (lawnOn === true) {
        money += 15;
        green += 6;
        document.getElementById("money").innerHTML = money;
        document.getElementById("green").innerHTML = green;
    }
}

function shovelSnow() {
    if (snowOn === true) {
        money += 20;
        green += 10;
        document.getElementById("money").innerHTML = money;
        document.getElementById("green").innerHTML = green;
    }
}

function deliverFood() {
    if (foodOn === true) {
        money += 25;
        green += 15;
        document.getElementById("money").innerHTML = money;
        document.getElementById("green").innerHTML = green;
    }
}

function doHandy() {
    if (handyOn === true) {
        money += 30;
        green += 21;
        document.getElementById("money").innerHTML = money;
        document.getElementById("green").innerHTML = green;
    }
}

function doOffice() {
    if (officeOn === true) {
        money += 35;
        green += 28;
        document.getElementById("money").innerHTML = money;
        document.getElementById("green").innerHTML = green;
    }
}

function conductMeetings() {
    if (meetingsOn === true) {
        money += 40;
        green += 36;
        document.getElementById("money").innerHTML = money;
        document.getElementById("green").innerHTML = green;
    }
}

function sellStocks() {
    if (stocksOn === true) {
        money += 45;
        green += 45;
        document.getElementById("money").innerHTML = money;
        document.getElementById("green").innerHTML = green;
    }
}

function sellCrypto() {
    if (cryptoOn === true) {
        money += 50;
        green += 55;
        document.getElementById("money").innerHTML = money;
        document.getElementById("green").innerHTML = green;
    }
}


setInterval(function() {
	paperRoute();
}, 500);

setInterval(function() {
    walkDog();
}, 1000);

setInterval(function() {
    mowLawns();
}, 1500);

setInterval(function() {
    shovelSnow();
}, 2000);

setInterval(function() {
    deliverFood();
}, 2500);

setInterval(function() {
    doHandy();
}, 3000);

setInterval(function() {
    doOffice();
}, 3500);

setInterval(function() {
    conductMeetings();
}, 4000);

setInterval(function() {
    sellStocks();
}, 4500);

setInterval(function() {
    sellCrypto();
}, 5000);


