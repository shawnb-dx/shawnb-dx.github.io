document.addEventListener("DOMContentLoaded", function() {
    const moneyElement = document.getElementById("money");
    const researchPointsElement = document.getElementById("research-points");
    const cakesElement = document.getElementById("cakes");
    const earnMoneyBtn = document.getElementById("earn-money-btn");
    const studyBtn = document.getElementById("study-btn");
    const bakeBtn = document.getElementById("bake-btn");
    const achievementsBtn = document.getElementById("achievements-btn");
    const earnMoneyList = document.getElementById("earn-money-list");
    const studyList = document.getElementById("study-list");
    const achievementsList = document.getElementById("achievements-list");

    let money = 500;
    let researchPoints = 0;
    let cakes = 0;
    let moneyIntervalID;
    let researchPointsIntervalID;

    // Auto-save interval (every 1 seconds)
    const autoSaveInterval = setInterval(() => {
        localStorage.setItem("gameState", JSON.stringify({ money, researchPoints, cakes, }));
    }, 1000);

    // Auto-load saved game state
    const savedGameState = localStorage.getItem("gameState");
    if (savedGameState) {
        const { money: savedMoney, researchPoints: savedResearchPoints, cakes: savedCakes, } = JSON.parse(savedGameState);
        money = savedMoney;
        researchPoints = savedResearchPoints;
        cakes = savedCakes;
    }
    // Define money earning methods with a purchased flag
    const moneyMethods = [
        { name: "Sell Cakes", moneyPerSecond: 10, cost: 100, purchased: false },
        { name: "Bake Sale", moneyPerSecond: 20, cost: 500, purchased: false },
        { name: "Catering Service", moneyPerSecond: 30, cost: 1000, purchased: false },
        // Add more money earning methods here...
    ];

    // Define study methods
    const studyMethods = [
        { name: "Experiment", researchPointsPerSecond: 5, cost: 200, purchased: false },
        { name: "Research Papers", researchPointsPerSecond: 10, cost: 500, purchased: false },
        { name: "Lab Work", researchPointsPerSecond: 15, cost: 1000, purchased: false },
        // Add more study methods here...
    ];

    // Define achievements
    const achievements = [
        { name: "Raking it in", description: "Earn 10,000 money", unlocked: false },
        { name: "Grow Your Mind", description: "Earn 2,000 RP", unlocked: false },
        // Add more achievements here...
    ];
function updateColors() {
    // Update colors for money earning methods
    earnMoneyList.querySelectorAll("li").forEach((methodItem, index) => {
        const methodName = methodItem.textContent.split(' - ')[0];
        const method = moneyMethods.find(method => method.name === methodName);
        
        if (method) {
            if (method.purchased) {
                methodItem.style.color = "gray";
                methodItem.disabled = true;
            } else if (money >= method.cost) {
                methodItem.style.color = "green";
                methodItem.disabled = false;
            } else {
                methodItem.style.color = "red";
                methodItem.disabled = true;
            }
        }
    });
}
 

    setInterval(() => {
        updateColors();
        updateUI();
    }, 10);

    earnMoneyBtn.addEventListener("click", function() {
        hideOtherMenus(earnMoneyList);
        earnMoneyList.classList.toggle("hidden");
        if (!earnMoneyList.classList.contains("hidden")) {
            renderMoneyMethods();
            updateColors();
        }
    });
    studyBtn.addEventListener("click", function() {
        hideOtherMenus(studyList);
        studyList.classList.toggle("hidden");
        if (!studyList.classList.contains("hidden")) {
            renderStudyMethods();
            updateColors();
        }
    });

achievementsBtn.addEventListener("click", function() {
    hideOtherMenus(achievementsList); // Hide other menus
    achievementsList.classList.toggle("hidden"); // Toggle visibility of achievements list
    if (!achievementsList.classList.contains("hidden")) {
        renderAchievements(); // Render achievements if the list is visible
    }
    checkAchievements(); // Call checkAchievements() to update achievements status
});

function renderMoneyMethods() {
    earnMoneyList.innerHTML = "";
    const purchasedMethodsList = document.createElement("ul"); // Create a separate list for purchased methods
    purchasedMethodsList.classList.add("purchased-methods");

    const availableMethodsList = document.createElement("ul"); // Create a separate list for available methods
    availableMethodsList.classList.add("available-methods");

    moneyMethods.forEach((method, index) => {
        const methodItem = document.createElement("li");
        methodItem.textContent = `${method.name} - Earns ${method.moneyPerSecond} RP/s - Cost: $${method.cost} (Earns ${method.moneyPerSecond} per second)`;

        if (method.purchased) {
            methodItem.textContent += " - BOUGHT";
            methodItem.style.color = "gray";
        }

        if (methodItem.textContent.includes("- BOUGHT")) {
            const purchasedMethodItem = document.createElement("li");
            purchasedMethodItem.textContent = methodItem.textContent;
            purchasedMethodItem.style.color = "gray"; // Set color to gray for purchased methods
            purchasedMethodItem.style.paddingLeft = "0"; // Remove padding to align with the main list
            purchasedMethodsList.appendChild(purchasedMethodItem);
        } else if (money >= method.cost) {
            methodItem.style.color = "green";
            methodItem.addEventListener("click", () => {
                startEarningMoney(index);
            });
            methodItem.style.cursor = "pointer"; // Change cursor to pointer for clickable items
            availableMethodsList.appendChild(methodItem);
        } else {
            methodItem.style.color = "red"; // Set color to red if the user cannot afford it
            methodItem.disabled = true;
            availableMethodsList.appendChild(methodItem);
        }
    });

    if (availableMethodsList.children.length > 0) {
        const availableMethodsHeading = document.createElement("h3");
        availableMethodsHeading.textContent = "Available Money-Making Methods";
        earnMoneyList.appendChild(availableMethodsHeading);
        earnMoneyList.appendChild(availableMethodsList); // Append the available methods list to the main list
    }

    if (purchasedMethodsList.children.length > 0) {
        const purchasedMethodsHeading = document.createElement("h3");
        purchasedMethodsHeading.textContent = "Purchased Money-Making Methods";
        purchasedMethodsList.style.marginTop = "10px"; // Add spacing to the top of the purchased methods list
        earnMoneyList.appendChild(purchasedMethodsHeading);
        earnMoneyList.appendChild(purchasedMethodsList); // Append the purchased methods list to the main list
    }

    updateColors(); // Update colors immediately after rendering the study methods
}
function renderStudyMethods() {
    studyList.innerHTML = "";
    const purchasedMethodsList = document.createElement("ul"); // Create a separate list for purchased methods
    purchasedMethodsList.classList.add("purchased-methods");

    const availableMethodsList = document.createElement("ul"); // Create a separate list for available methods
    availableMethodsList.classList.add("available-methods");

    studyMethods.forEach((method, index) => {
        const methodItem = document.createElement("li");
        methodItem.textContent = `${method.name} - Earns ${method.researchPointsPerSecond} RP/s - Cost: $${method.cost} (Earns ${method.researchPointsPerSecond} per second)`;

        if (method.purchased) {
            methodItem.textContent += " - BOUGHT";
            methodItem.style.color = "gray";
        }

        if (methodItem.textContent.includes("- BOUGHT")) {
            const purchasedMethodItem = document.createElement("li");
            purchasedMethodItem.textContent = methodItem.textContent;
            purchasedMethodItem.style.color = "gray"; // Set color to gray for purchased methods
            purchasedMethodItem.style.paddingLeft = "0"; // Remove padding to align with the main list
            purchasedMethodsList.appendChild(purchasedMethodItem);
        } else if (money >= method.cost) {
            methodItem.style.color = "green";
            methodItem.addEventListener("click", () => {
                startStudying(index);
            });
            methodItem.style.cursor = "pointer"; // Change cursor to pointer for clickable items
            availableMethodsList.appendChild(methodItem);
        } else {
            methodItem.style.color = "red"; // Set color to red if the user cannot afford it
            methodItem.disabled = true;
            availableMethodsList.appendChild(methodItem);
        }
    });

    if (availableMethodsList.children.length > 0) {
        const availableMethodsHeading = document.createElement("h3");
        availableMethodsHeading.textContent = "Available Study Methods";
        studyList.appendChild(availableMethodsHeading);
        studyList.appendChild(availableMethodsList); // Append the available methods list to the main list
    }

    if (purchasedMethodsList.children.length > 0) {
        const purchasedMethodsHeading = document.createElement("h3");
        purchasedMethodsHeading.textContent = "Purchased Study Methods";
        purchasedMethodsList.style.marginTop = "10px"; // Add spacing to the top of the purchased methods list
        studyList.appendChild(purchasedMethodsHeading);
        studyList.appendChild(purchasedMethodsList); // Append the purchased methods list to the main list
    }

    updateColors(); // Update colors immediately after rendering the study methods
}
function startEarningMoney(index) {
    const selectedMethod = moneyMethods[index];
    if (money >= selectedMethod.cost && !selectedMethod.purchased) {
        money -= selectedMethod.cost;
        selectedMethod.purchased = true;
        clearInterval(moneyIntervalID); // Clear existing interval
moneyIntervalID = setInterval(() => {
    let totalMoneyPerSecond = 0;
    moneyMethods.forEach(method => {
        if (method.purchased) {
            totalMoneyPerSecond += method.moneyPerSecond;
        }
    });
    money += totalMoneyPerSecond; // Add total money per second to the money variable
    updateUI();
    renderMoneyMethods();
}, 1000);
    } else if (selectedMethod.purchased) {
        alert("This method has already been purchased.");
    } else {
        alert("Not enough money to start this method.");
    }
}


function startStudying(index) {
    const selectedMethod = studyMethods[index];
    if (money >= selectedMethod.cost && !selectedMethod.purchased) {
        money -= selectedMethod.cost;
        selectedMethod.purchased = true;
        clearInterval(researchPointsIntervalID); // Clear existing interval
        researchPointsIntervalID = setInterval(() => {
            let totalResearchPointsPerSecond = 0; // Initialize total research points per second
            studyMethods.forEach(method => {
                if (method.purchased) {
                    totalResearchPointsPerSecond += method.researchPointsPerSecond; // Add research points per second if method is purchased
                }
            });
            researchPoints += totalResearchPointsPerSecond;
            updateUI(); // Update UI after each interval
            renderStudyMethods(); // Update the list of study methods
        }, 1000);
    } else if (selectedMethod.purchased) {
        alert("This method has already been purchased.");
    } else {
        alert("Not enough money to start this method.");
    }
}
function checkAchievements() {
        // Check conditions for each achievement and update unlocked status if conditions are met
        achievements.forEach(achievement => {
            if (!achievement.unlocked) {
                switch (achievement.name) {
                    case "Raking it in":
                        if (money >= 10000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Grow Your Mind":
                        if (researchPoints >= 2000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    // Add more cases for other achievements...
                }
            }
        });
    }

function renderAchievements() {
    // Clear existing achievements list
    achievementsList.innerHTML = "";

    // Loop through achievements array
    achievements.forEach(achievement => {
        const achievementItem = document.createElement("li");

        // Check if the achievement is unlocked
        if (achievement.unlocked) {
            // If unlocked, display in green
            achievementItem.style.color = "green";
            achievementItem.textContent = `${achievement.name}: ${achievement.description} - Unlocked`;
        } else {
            // If locked, display progress towards completion
            let progress = "";
            switch (achievement.name) {
                case "Raking it in":
                    progress = `Progress: $${money} / $10000`;
                    break;
                case "Grow Your Mind":
                    progress = `Progress: ${researchPoints} / 2000 RP`;
                    break;
                // Add more cases for other achievements...
                default:
                    progress = "Progress: N/A";
                    break;
            }
            achievementItem.style.color = "red";
            achievementItem.textContent = `${achievement.name}: ${achievement.description} - ${progress}`;
        }

        // Append achievement item to achievements list
        achievementsList.appendChild(achievementItem);
    });
}

    function updateUI() {
        moneyElement.textContent = money;
        researchPointsElement.textContent = researchPoints;
        cakesElement.textContent = Math.round(cakes);
        renderAchievements();
    }

    function hideOtherMenus(currentMenu) {
        const allMenus = [earnMoneyList, studyList, achievementsList,];
        allMenus.forEach(menu => {
            if (menu !== currentMenu && !menu.classList.contains("hidden")) {
                menu.classList.add("hidden");
            }
        });
    }

});