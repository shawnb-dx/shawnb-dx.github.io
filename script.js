document.addEventListener("DOMContentLoaded", function() {
    const moneyElement = document.getElementById("money");
    const researchPointsElement = document.getElementById("research-points");
    const levelElement = document.getElementById("level");
    const earnMoneyBtn = document.getElementById("earn-money-btn");
    const studyBtn = document.getElementById("study-btn");
    const bakeBtn = document.getElementById("bake-btn");
    const achievementsBtn = document.getElementById("achievements-btn");
    const earnMoneyList = document.getElementById("earn-money-list");
    const studyList = document.getElementById("study-list");
    const achievementsList = document.getElementById("achievements-list");
    

    let money = 1000;
    let researchPoints = 1000;
    let level = 1;
    let xp = 0;
    let cakes = 0;
    let xpRequiredPerLevel = 250;
    let excessXP = 0;
    let moneyIntervalID;
    let researchPointsIntervalID;

    // Define money earning methods with a purchased flag
    const moneyMethods = [
        { name: "Paper Route", moneyPerSecond: 2, cost: 0, purchased: false },
        { name: "Walk Dogs", moneyPerSecond: 5, cost: 250, purchased: false },
        { name: "Become A Twitch Affiliate", moneyPerSecond: 10, cost: 1000, purchased: false },
        { name: "Sell Products At Farmers Market", moneyPerSecond: 20, cost: 2000, purchased: false },
        { name: "Brew And Sell Own Beer", moneyPerSecond: 35, cost: 4000, purchased: false },
        { name: "Give A Tour Guide", moneyPerSecond: 50, cost: 8000, purchased: false },
        { name: "Become A Personal Trainer", moneyPerSecond: 75, cost: 16000, purchased: false },
        { name: "Become A Twitch Partner", moneyPerSecond: 100, cost: 32000, purchased: false },
        { name: "Take A Sponsorship Deal", moneyPerSecond: 150, cost: 64000, purchased: false },
        { name: "Star In A Movie", moneyPerSecond: 200, cost: 128000, purchased: false },
        // Add more money earning methods here...
    ];

    // Define study methods
    const studyMethods = [
        { name: "Read A Book", researchPointsPerSecond: 2, cost: 100, purchased: false },
        { name: "Spend Time On Wikipedia", researchPointsPerSecond: 5, cost: 250, purchased: false },
        { name: "Do A Mock Test", researchPointsPerSecond: 10, cost: 1000, purchased: false },
        { name: "Experiment", researchPointsPerSecond: 20, cost: 2000, purchased: false },
        { name: "Process Lab Work", researchPointsPerSecond: 35, cost: 4000, purchased: false },
        { name: "Write A Research Paper", researchPointsPerSecond: 50, cost: 8000, purchased: false },
        { name: "Give A TED Talk", researchPointsPerSecond: 75, cost: 16000, purchased: false },
        { name: "Conduct A Field Study", researchPointsPerSecond: 100, cost: 32000, purchased: false },
        { name: "Teach Some Students", researchPointsPerSecond: 150, cost: 64000, purchased: false },
        { name: "Write A Best Selling Book", researchPointsPerSecond: 200, cost: 128000, purchased: false },
        // Add more study methods here...
    ];

    // Define achievements
    const achievements = [
        { name: "Starting Out Small", description: "Earn Your First $100.", unlocked: false },
        { name: "A Ruff Road Ahead", description: "Earn Enough To Unlock Dog Walking", unlocked: false },
        { name: "Starting A Livestream Empire", description: "Earn Enough To Start Streaming", unlocked: false },
        { name: "Gift Of The Gab", description: "Earn Enough To Sell At Farmers Markets", unlocked: false },
        { name: "Brewmaster", description: "Earn Enough To Make Your Own Beer", unlocked: false },
        { name: "And On Your Left...", description: "Earn Enough To Become A Tour Guide", unlocked: false },
        { name: "No Pain, No Gain", description: "Earn Enough To Become A Personal Trainer", unlocked: false },
        { name: "Coming At You Live!", description: "Earn Enough To Make It Big On Twitch", unlocked: false },
        { name: "Use My Affiliate Code", description: "Earn Enough To Get Your First Sponsorship", unlocked: false },
        { name: "Name Up In Lights", description: "Earn Enough To Star In A Movie", unlocked: false },
        { name: "Love A Good Book", description: "Gain 100 Research Points Reading Books", unlocked: false },
        { name: "Wikipedia Knows All", description: "Gain Enough Knowledge In Order To Browse Wikipedia", unlocked: false },
        { name: "Passing The Tests", description: "Gain Enough Knowledge In Order To Get Test Ready ", unlocked: false },
        { name: "Experimentalist", description: "Gain Enough Knowledge In Order To Conduct Experiments ", unlocked: false },
        { name: "Lab Prodigy", description: "Gain Enough Knowledge In Order To Become A Lab Technician ", unlocked: false },
        { name: "Scholarly Author", description: "Gain Enough Knowledge In Order To Write Your Own Paper ", unlocked: false },
        { name: "My Name Is TED", description: "Gain Enough Knowledge In Order To Become A TED Talker ", unlocked: false },
        { name: "Out In The Fields Of Glory", description: "Gain Enough Knowledge In Order To Conduct Field Research", unlocked: false },
        { name: "Shaping Young Minds", description: "Gain Enough Knowledge In Order To Teach A Class ", unlocked: false },
        { name: "Bestselling Author", description: "Gain Enough Knowledge In Order To Become An Author", unlocked: false },
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
        checkAchievements();
    }, 10);	
 
function updateLevel() {
    const remainingXP = xpRequiredPerLevel - excessXP; // Calculate remaining XP required for the next level
    const currentXP = xpRequiredPerLevel - remainingXP; // Calculate current XP progress
    levelElement.innerHTML = `Level: ${level} (EXP: ${currentXP}/${xpRequiredPerLevel})`; // Update level display
}

    // Function to increase the XP required for the next level by 20%
function increaseXPRequired() {
    xpRequiredPerLevel = Math.ceil(xpRequiredPerLevel * 1.2); // Increase by 20% and round up
}

    // Function to handle leveling up
function levelUpIfNeeded() {
    const remainingXP = xpRequiredPerLevel - excessXP; // Calculate remaining XP required for the next level
    const currentXP = xpRequiredPerLevel - remainingXP; // Calculate current XP progress
    level++; // Increase level
    excessXP -= xpRequiredPerLevel; // Deduct excess XP contributed to the current level
    increaseXPRequired(); // Increase XP required for next level
    updateLevel(); // Update level display
}

    // Other functions and event listeners...

    // Function to handle earning XP
function earnXP(amount) {
    xp += amount;
    excessXP += amount; // Accumulate excess XP

    // Check if there is excess XP to contribute to the next level
    if (excessXP >= xpRequiredPerLevel) {
        levelUpIfNeeded(); // Check if level up is needed
    } else {
        updateLevel(); // Update level display with current progress
    }
}


function convertResearchPointsToXP(amount) {
    if (researchPoints >= amount) {
        researchPoints -= amount;
        const xpEarned = amount; // The amount of XP earned is equal to the amount of research points converted
        earnXP(xpEarned); // Call earnXP function with the amount of XP earned
        updateLevel(); // Update level display
        updateUI(); // Update UI elements
    }
}

    convert1RPBtn.addEventListener("click", function() {
        convertResearchPointsToXP(1);
    });

    convert10RPBtn.addEventListener("click", function() {
        convertResearchPointsToXP(10);
    });

    convert100RPBtn.addEventListener("click", function() {
        convertResearchPointsToXP(100);
    });

    convertAllRPBtn.addEventListener("click", function() {
        convertResearchPointsToXP(researchPoints);
    });

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
});

function renderMoneyMethods() {
    earnMoneyList.innerHTML = "";
    const purchasedMethodsList = document.createElement("ul"); // Create a separate list for purchased methods
    purchasedMethodsList.classList.add("purchased-methods");

    const availableMethodsList = document.createElement("ul"); // Create a separate list for available methods
    availableMethodsList.classList.add("available-methods");

    moneyMethods.forEach((method, index) => {
        const methodItem = document.createElement("li");
        methodItem.textContent = `${method.name} - Earns $${method.moneyPerSecond}/s - Cost: $${method.cost}`;

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
        methodItem.textContent = `${method.name} - Earns ${method.researchPointsPerSecond} RP/s - Cost: $${method.cost}`;

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
                    case "Starting Out Small":
                        if (money >= 100) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "A Ruff Road Ahead":
                        if (money >= 250) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Starting A Livestream Empire":
                        if (money >= 1000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Gift Of The Gab":
                        if (money >= 2000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Brewmaster":
                        if (money >= 4000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "And On Your Left...":
                        if (money >= 8000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "No Pain, No Gain":
                        if (money >= 16000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Coming At You Live!":
                        if (money >= 32000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Use My Affiliate Code":
                        if (money >= 64000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Name Up In Lights":
                        if (money >= 128000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Love A Good Book":
                        if (researchPoints >= 100) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Wikipedia Knows All":
                        if (researchPoints >= 250) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Passing The Tests":
                        if (researchPoints >= 1000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Experimentalist":
                        if (researchPoints >= 2000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Lab Prodigy":
                        if (researchPoints >= 4000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Scholarly Author":
                        if (researchPoints >= 8000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "My Name Is TED":
                        if (researchPoints >= 16000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Out In The Fields Of Glory":
                        if (researchPoints >= 32000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Shaping Young Minds":
                        if (researchPoints >= 64000) {
                            achievement.unlocked = true;
                            alert(`Achievement Unlocked: ${achievement.name}`);
                        }
                        break;
                    case "Bestselling Author":
                        if (researchPoints >= 128000) {
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
    // Clear existing achievements lists
    achievementsList.innerHTML = "";
    const earnedAchievementsList = document.createElement("ul"); // Create a separate list for earned achievements
    earnedAchievementsList.classList.add("earned-achievements");

    const unearnedAchievementsList = document.createElement("ul"); // Create a separate list for unearned achievements
    unearnedAchievementsList.classList.add("unearned-achievements");

    // Loop through achievements array
    achievements.forEach(achievement => {
        const achievementItem = document.createElement("li");

        // Check if the achievement is unlocked
        if (achievement.unlocked) {
            // If unlocked, display in earned list
            achievementItem.style.color = "green";
            achievementItem.textContent = `${achievement.name}: ${achievement.description} - Unlocked`;
            earnedAchievementsList.appendChild(achievementItem);
        } else {
            // If locked, display in unearned list
            const progress = getAchievementProgress(achievement); // Function to get achievement progress
            achievementItem.style.color = "red";
            achievementItem.textContent = `${achievement.name}: ${achievement.description} - ${progress}`;
            unearnedAchievementsList.appendChild(achievementItem);
        }
    });

    // Add heading for earned achievements list
    const earnedAchievementsHeading = document.createElement("h3");
    earnedAchievementsHeading.textContent = "Earned Achievements";
    achievementsList.appendChild(earnedAchievementsHeading);
    
    // Append earned achievements list to main achievements list
    achievementsList.appendChild(earnedAchievementsList);

    // Add heading for unearned achievements list
    const unearnedAchievementsHeading = document.createElement("h3");
    unearnedAchievementsHeading.textContent = "Unearned Achievements";
    achievementsList.appendChild(unearnedAchievementsHeading);

    // Append unearned achievements list to main achievements list
    achievementsList.appendChild(unearnedAchievementsList);
}

// Function to get achievement progress
function getAchievementProgress(achievement) {
    let progress = "";
    switch (achievement.name) {
        case "Starting Out Small":
            progress = `Progress: $${money} / $100`;
            break;
        case "A Ruff Road Ahead":
            progress = `Progress: $${money} / $250`;
            break;
        case "Starting A Livestream Empire":
            progress = `Progress: $${money} / $1000`;
            break;
        case "Gift Of The Gab":
            progress = `Progress: $${money} / $2000`;
            break;
        case "Brewmaster":
            progress = `Progress: $${money} / $4000`;
            break;
        case "And On Your Left...":
            progress = `Progress: $${money} / $8000`;
            break;
        case "No Pain, No Gain":
            progress = `Progress: $${money} / $16000`;
            break;
        case "Coming At You Live!":
            progress = `Progress: $${money} / $32000`;
            break;
        case "Use My Affiliate Code":
            progress = `Progress: $${money} / $64000`;
            break;
        case "Name Up In Lights":
            progress = `Progress: $${money} / $128000`;
            break;
        case "Love A Good Book":
            progress = `Progress: ${researchPoints} / 100`;
            break;
        case "Wikipedia Knows All":
            progress = `Progress: ${researchPoints} / 250`;
            break;
        case "Passing The Tests":
            progress = `Progress: ${researchPoints} / 1000`;
            break;
        case "Experimentalist":
            progress = `Progress: ${researchPoints} / 2000`;
            break;
        case "Lab Prodigy":
            progress = `Progress: ${researchPoints} / 4000`;
            break;
        case "Scholarly Author":
            progress = `Progress: ${researchPoints} / 8000`;
            break;
        case "My Name Is TED":
            progress = `Progress: ${researchPoints} / 16000`;
            break;
        case "Out In The Fields Of Glory":
            progress = `Progress: ${researchPoints} / 32000`;
            break;
        case "Shaping Young Minds":
            progress = `Progress: ${researchPoints} / 64000`;
            break;
        case "Bestselling Author":
            progress = `Progress: ${researchPoints} / 128000`;
            break;
    }
    return progress;
}


function updateUI() {
    const xpRequired = level * xpRequiredPerLevel;
    const remainingXP = xpRequiredPerLevel - excessXP;
    const currentXP = xpRequiredPerLevel - remainingXP;; // Calculate current XP
    moneyElement.textContent = money;
    researchPointsElement.textContent = researchPoints;
    levelElement.innerHTML = `Level: ${level} (EXP: ${currentXP}/${xpRequiredPerLevel})`; // Update level display
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