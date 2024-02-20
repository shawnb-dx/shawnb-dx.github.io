var money = 5;
var green = 0;
var paperCost = 5;
var paperOn = false;

function buyPaper() {
    if (money >= paperCost) {
        money = money - paperCost;
        paperOn = true;

        document.getElementById("money").innerHTML = money;

        var unlockButton = document.querySelector('.unlock');
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

setInterval(function() {
	paperRoute();
}, 5000);
