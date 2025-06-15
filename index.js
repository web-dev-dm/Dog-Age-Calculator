const calDogAge = function(e) {
    e.preventDefault(); // Prevent form reload

    const dogAgeInput = document.querySelector("#dAge").value;
    const dogName = document.querySelector("#dName").value;
    
    if (dogAgeInput === "") {
        return alert("🚫 No dogAge provided.");
    }

    const dogAge = Number(dogAgeInput);

    if (isNaN(dogAge) || dogAge < 0) {
        return alert("🚫 Please enter a valid non-negative number.");
    }

    let message = "";

    if (dogAge <= 25) { // Normal case
        let humanAge;
        if (dogAge === 0) {
            humanAge = 0;
        } else if (dogAge === 1) {
            humanAge = 15;
        } else if (dogAge === 2) {
            humanAge = 24;
        } else {
            humanAge = 24 + (dogAge - 2) * 5;
        }

        message = `🐶 Your dog ${dogName} is approximately ${humanAge} years old in human years.`;
    } else {
        message = `⚠️ The average lifespan for dogs is between 10–13 years. Your input seems unusually high.`;
    }

    document.querySelector(".ansP").textContent = message;
};

document.querySelector(".submitBtn").addEventListener("click", calDogAge);
