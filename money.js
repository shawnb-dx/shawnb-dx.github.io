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
    if (paperOn) {
        applyButtonStyles();
    } else if (money >= paperCost) {
        money -= paperCost;
        paperOn = true;
        document.getElementById("money").innerHTML = money;
        applyButtonStyles();
    }
}

function applyButtonStyles() {
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
function buyDogs() {
    if (dogOn) {
        applyButtonStyles2();
    } else if (money >= dogCost && green >= dogGreen) {
        money -= dogCost;
        dogOn = true;
        document.getElementById("money").innerHTML = money;
        applyButtonStyles2();
    }
}

function applyButtonStyles2() {
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
function buyLawns() {
    if (lawnOn) {
        applyButtonStyles3();
    } else if (money >= lawnCost && green >= lawnGreen) {
        money -= lawnCost;
        lawnOn = true;
        document.getElementById("money").innerHTML = money;
        applyButtonStyles3();
    }
}

function applyButtonStyles3() {
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
function buySnow() {
    if (snowOn) {
        applyButtonStyles4();
    } else if (money >= snowCost && green >= snowGreen) {
        money -= snowCost;
        snowOn = true;
        document.getElementById("money").innerHTML = money;
        applyButtonStyles4();
    }
}

function applyButtonStyles4() {
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
function buyFood() {
    if (foodOn) {
        applyButtonStyles5();
    } else if (money >= foodCost && green >= foodGreen) {
        money -= foodCost;
        foodOn = true;
        document.getElementById("money").innerHTML = money;
        applyButtonStyles5();
    }
}

function applyButtonStyles5() {
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
function buyHandy() {
    if (handyOn) {
        applyButtonStyles6();
    } else if (money >= handyCost && green >= handyGreen) {
        money -= handyCost;
        handyOn = true;
        document.getElementById("money").innerHTML = money;
        applyButtonStyles6();
    }
}

function applyButtonStyles6() {
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
function buyOffice() {
    if (officeOn) {
        applyButtonStyles7();
    } else if (money >= officeCost && green >= officeGreen) {
        money -= officeCost;
        officeOn = true;
        document.getElementById("money").innerHTML = money;
        applyButtonStyles7();
    }
}

function applyButtonStyles7() {
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
function buyMeetings() {
    if (meetingsOn) {
        applyButtonStyles8();
    } else if (money >= meetingsCost && green >= meetingsGreen) {
        money -= meetingsCost;
        meetingsOn = true;
        document.getElementById("money").innerHTML = money;
        applyButtonStyles8();
    }
}

function applyButtonStyles8() {
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
function buyStocks() {
    if (stocksOn) {
        applyButtonStyles9();
    } else if (money >= stocksCost && green >= stocksGreen) {
        money -= stocksCost;
        stocksOn = true;
        document.getElementById("money").innerHTML = money;
        applyButtonStyles9();
    }
}

function applyButtonStyles9() {
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
function buyCrypto() {
    if (cryptoOn) {
        applyButtonStyles10();
    } else if (money >= cryptoCost && green >= cryptoGreen) {
        money -= cryptoCost;
        cryptoOn = true;
        document.getElementById("money").innerHTML = money;
        applyButtonStyles10();
    }
}

function applyButtonStyles10() {
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
function clearSave() {
    localStorage.clear();
    document.getElementById("money").textContent = "5";
    document.getElementById("green").textContent = "0";

    location.reload();
}

document.getElementById("clearSaveBtn").addEventListener("click", clearSave);

function saveGame() {
	var gameSave = {
		money: money,
		green: green,
		paperCost: paperCost,
		paperOn: paperOn,
		dogCost: dogCost,
		dogGreen: dogGreen,
		dogOn: dogOn,
		lawnCost: lawnCost,
		lawnGreen: lawnGreen,
		lawnOn: lawnOn,
		snowCost: snowCost,
		snowGreen: snowGreen,
		snowOn: snowOn,
		foodCost: foodCost,
		foodGreen: foodGreen,
		foodOn: foodOn,
 		handyCost: handyCost,
		handyGreen: handyGreen,
		handyOn: handyOn,
		officeCost: officeCost,
		officeGreen: officeGreen,
		officeOn: officeOn,
		meetingsCost: meetingsCost,
		meetingsGreen: meetingsGreen,
		meetingsOn: meetingsOn,
		stocksCost:stocksCost,
		stocksGreen:stocksGreen,
		stocksOn: stocksOn,
		cryptoCost: cryptoCost,
		cryptoGreen: cryptoGreen,
		cryptoOn:cryptoOn
	};
	localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
	var savedGame = JSON.parse(localStorage.getItem("gameSave"));
	if (typeof savedGame.money !== "undefined") money = savedGame.money;
	if (typeof savedGame.green !== "undefined") green = savedGame.green;
	if (typeof savedGame.paperCost !== "undefined") paperCost = savedGame.paperCost;
	if (typeof savedGame.paperOn !== "undefined") paperOn = savedGame.paperOn;
	if (typeof savedGame.dogCost !== "undefined") dogCost = savedGame.dogCost;
	if (typeof savedGame.dogGreen !== "undefined") dogGreen = savedGame.dogGreen;
	if (typeof savedGame.dogOn !== "undefined") dogOn = savedGame.dogOn;
	if (typeof savedGame.lawnCost !== "undefined") lawnCost = savedGame.lawnCost;
	if (typeof savedGame.lawnGreen !== "undefined") lawnGreen = savedGame.lawnGreen;
	if (typeof savedGame.lawnOn !== "undefined") lawnOn = savedGame.lawnOn;
	if (typeof savedGame.snowCost !== "undefined") snowCost = savedGame.snowCost;
	if (typeof savedGame.snowGreen !== "undefined") snowGreen = savedGame.snowGreen;
	if (typeof savedGame.snowOn !== "undefined") snowOn = savedGame.snowOn;
	if (typeof savedGame.foodCost !== "undefined") foodCost = savedGame.foodCost;
	if (typeof savedGame.foodGreen !== "undefined") foodGreen = savedGame.foodGreen;
	if (typeof savedGame.foodOn !== "undefined") foodOn = savedGame.foodOn;
	if (typeof savedGame.handyCost !== "undefined") handyCost = savedGame.handyCost;
	if (typeof savedGame.handyGreen !== "undefined") handyGreen = savedGame.handyGreen;
	if (typeof savedGame.handyOn !== "undefined") handyOn = savedGame.handyOn;
	if (typeof savedGame.officeCost !== "undefined") officeCost = savedGame.officeCost;
	if (typeof savedGame.officeGreen !== "undefined") officeGreen = savedGame.officeGreen;
	if (typeof savedGame.officeOn !== "undefined") officeOn = savedGame.officeOn;
	if (typeof savedGame.meetingsCost !== "undefined") meetingsCost = savedGame.meetingsCost;
	if (typeof savedGame.meetingsGreen !== "undefined") meetingsGreen = savedGame.meetingsGreen;
	if (typeof savedGame.meetingsOn !== "undefined") meetingsOn = savedGame.meetingsOn;
	if (typeof savedGame.stocksCost !== "undefined") stocksCost = savedGame.stocksCost;
	if (typeof savedGame.stocksGreen !== "undefined") stocksGreen = savedGame.stocksGreen;
	if (typeof savedGame.stocksOn !== "undefined") stocksOn = savedGame.stocksOn;
	if (typeof savedGame.cryptoCost !== "undefined") cryptoCost = savedGame.cryptoCost;
	if (typeof savedGame.cryptoGreen !== "undefined") cryptoGreen = savedGame.cryptoGreen;	
	if (typeof savedGame.cryptoOn !== "undefined") cryptoOn = savedGame.cryptoOn;	
									
}
setInterval(function() {
	saveGame();
}, 5000);

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

window.onload = function() {
    loadGame();
    document.getElementById("money").innerHTML = money;
    document.getElementById("green").innerHTML = green;

    if (paperOn) {
        applyButtonStyles();
    }
    if (dogOn) {
        applyButtonStyles2();
    }
    if (lawnOn) {
        applyButtonStyles3();
    }
    if (snowOn) {
        applyButtonStyles4();
    }
    if (handyOn) {
        applyButtonStyles5();
    }
    if (foodOn) {
        applyButtonStyles6();
    }
    if (officeOn) {
        applyButtonStyles7();
    }
    if (meetingsOn) {
        applyButtonStyles8();
    }
    if (stocksOn) {
        applyButtonStyles9();
    }
    if (cryptoOn) {
        applyButtonStyles10();
    }
};


setInterval(function() {
	paperRoute();
}, 50);

setInterval(function() {
    walkDog();
}, 10000);

setInterval(function() {
    mowLawns();
}, 15000);

setInterval(function() {
    shovelSnow();
}, 20000);

setInterval(function() {
    deliverFood();
}, 25000);

setInterval(function() {
    doHandy();
}, 30000);

setInterval(function() {
    doOffice();
}, 35000);

setInterval(function() {
    conductMeetings();
}, 40000);

setInterval(function() {
    sellStocks();
}, 45000);

setInterval(function() {
    sellCrypto();
}, 50000);


