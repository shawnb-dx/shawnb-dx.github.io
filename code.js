		var score = 0;
		var clicks = 1;

		var victoriaCost = 100;
		var Sponges = 0;
		var battenbergCost = 500;
		var Battenbergs = 0;
		var velvetCost = 1000;
		var Velvets = 0;
		var flourCost = 25;
		var Flour = 0;
		var sugarCost = 125;
		var Sugar = 0;
		var eggsCost = 250;
		var Eggs = 0;

		function buyVictoria() {
			if (score >= victoriaCost) {
				score = score - victoriaCost;
				Sponges = Sponges +1;
				victoriaCost = Math.round(victoriaCost * 1.15);

				document.getElementById("score").innerHTML = score;
				// Jquery : $("#score").html();
				document.getElementById("victoriaCost").innerHTML = victoriaCost;
				document.getElementById("Sponges").innerHTML = Sponges;
				updateScorePerSecond();
			}
		}

		function buyBattenberg() {
			if (score >= battenbergCost) {
				score = score - battenbergCost;
				Battenbergs = Battenbergs +1;
				battenbergCost = Math.round(battenbergCost * 1.15);

				document.getElementById("score").innerHTML = score;
				document.getElementById("battenbergCost").innerHTML = battenbergCost;
				document.getElementById("Battenbergs").innerHTML = Battenbergs;
				updateScorePerSecond();
			}
		}
		function buyVelvet() {
			if (score >= velvetCost) {
				score = score - velvetCost;
				Velvets = Velvets +1;
				velvetCost = Math.round(velvetCost * 1.15);

				document.getElementById("score").innerHTML = score;
				document.getElementById("velvetCost").innerHTML = velvetCost;
				document.getElementById("Velvets").innerHTML = Velvets;
				updateScorePerSecond();
			}
		}		
		function buyFlour() {
			if (score >= flourCost) {
				score = score - flourCost;
				Flour = Flour + 1;
				flourCost = Math.round(flourCost * 1.15);
				clicks = clicks + 1;

				document.getElementById("score").innerHTML = score;
				document.getElementById("flourCost").innerHTML = flourCost;
				document.getElementById("Flour").innerHTML = Flour;
				document.getElementById("clicks").innerHTML = clicks;	
			}
		}
		function buySugar() {
			if (score >= sugarCost) {
				score = score - sugarCost;
				Sugar = Sugar + 1;
				sugarCost = Math.round(sugarCost * 1.15);
				clicks = clicks + 5;

				document.getElementById("score").innerHTML = score;
				document.getElementById("sugarCost").innerHTML = sugarCost;
				document.getElementById("Sugar").innerHTML = Sugar;
				document.getElementById("clicks").innerHTML = clicks;	
			}
		}
		function buyEggs() {
			if (score >= eggsCost) {
				score = score - eggsCost;
				Eggs = Eggs + 1;
				eggsCost = Math.round(eggsCost * 1.15);
				clicks = clicks + 10;

				document.getElementById("score").innerHTML = score;
				document.getElementById("eggsCost").innerHTML = eggsCost;
				document.getElementById("Eggs").innerHTML = Eggs;
				document.getElementById("clicks").innerHTML = clicks;	
			}
		}
		function addToScore(amount) {
			score = score + amount;
			document.getElementById("score").innerHTML = score;
		}
		function updateScorePerSecond() {
			scorePerSecond = Sponges + Battenbergs * 5 + Velvets * 10;
			document.getElementById("scorepersecond").innerHTML = scorePerSecond;
		}
		function loadGame() {
			var savedGame = JSON.parse(localStorage.getItem("gameSave"));
			if (typeof savedGame.score !== "undefined") score = savedGame.score;
			if (typeof savedGame.clicks !== "undefined") clicks = savedGame.clicks;
			if (typeof savedGame.victoriaCost !== "undefined") victoriaCost = savedGame.victoriaCost;
			if (typeof savedGame.Sponges !== "undefined") Sponges = savedGame.Sponges;
			if (typeof savedGame.battenbergCost !== "undefined") battenbergCost = savedGame.battenbergCost;
			if (typeof savedGame.Battenbergs !== "undefined") Battenbergs = savedGame.Battenbergs;
			if (typeof savedGame.velvetCost !== "undefined") velvetCost = savedGame.velvetCost;
			if (typeof savedGame.Velvets !== "undefined") Velvets = savedGame.Velvets;
			if (typeof savedGame.flourCost !== "undefined") flourCost = savedGame.flourCost;
			if (typeof savedGame.Flour !== "undefined") Flour = savedGame.Flour;
			if (typeof savedGame.sugarCost !== "undefined") sugarCost = savedGame.sugarCost;
			if (typeof savedGame.Sugar !== "undefined") Sugar = savedGame.Sugar;
			if (typeof savedGame.eggsCost !== "undefined") eggsCost = savedGame.eggsCost;
			if (typeof savedGame.Eggs !== "undefined") Eggs = savedGame.Eggs;

		}
		function saveGame() {
			var gameSave = {
				score: score,
				clicks: clicks,
				victoriaCost: victoriaCost,
				Sponges: Sponges,
				battenbergCost: battenbergCost,
				Battenbergs: Battenbergs,
				velvetCost: velvetCost,
				Velvets: Velvets,
				flourCost: flourCost,
				Flour: Flour,
				sugarCost: sugarCost,
				Sugar: Sugar,
				eggsCost: eggsCost,
				Eggs: Eggs
			};
			localStorage.setItem("gameSave", JSON.stringify(gameSave));

		}
		setInterval(function() {
			saveGame();
		}, 10); // 1000ms = 1 second
		
		window.onload = function() {
			loadGame();
			updateScorePerSecond();
			document.getElementById("score").innerHTML = score;
			document.getElementById("clicks").innerHTML = clicks;							
			document.getElementById("victoriaCost").innerHTML = victoriaCost;
			document.getElementById("Sponges").innerHTML = Sponges;
			document.getElementById("battenbergCost").innerHTML = battenbergCost;
			document.getElementById("Battenbergs").innerHTML = Battenbergs;
			document.getElementById("velvetCost").innerHTML = velvetCost;
			document.getElementById("Velvets").innerHTML = Velvets;
			document.getElementById("flourCost").innerHTML = flourCost;
			document.getElementById("Flour").innerHTML = Flour;
			document.getElementById("sugarCost").innerHTML = sugarCost;
			document.getElementById("Sugar").innerHTML = Sugar;
			document.getElementById("eggsCost").innerHTML = eggsCost;
			document.getElementById("Eggs").innerHTML = Eggs;
		};

		setInterval(function() {
			score = score + Sponges;

			document.getElementById("score").innerHTML = score;

			document.title = score + " Slices Of Cake - Cake Collectors"
		}, 1000); // 1000ms = 1 second
		setInterval(function() {
			score = score + Battenbergs * 5;

			document.getElementById("score").innerHTML = score;
		}, 5000); // 5000ms = 5 seconds
		setInterval(function() {
			score = score + Velvets * 10;

			document.getElementById("score").innerHTML = score;
		}, 10000); // 10000ms = 10 seconds
