
const calDogAge = function() {
    // let dogAge = prompt ("what is your dog age?");
    let dogAge = document.querySelector("#dAge").value;
    let dogName = document.querySelector("#dName").value

 
    if (isNaN(dogAge) || dogAge < 0) {
      return alert("🚫 Please enter a valid non-negative number.");

     }
    
    let input = document.querySelector("#dAge").value;
    if (input === "") {
    return alert("🚫 No dogAge provided.");
    }

    
if(dogAge.length < 3) {
    let humanAge;
    if (dogAge === 0) {
      humanAge = 0;
    } else if (dogAge === 1) {
      humanAge = 15;
    } else if (dogAge === 2) {
      humanAge = 24;
    } else {
      // years after year 2
      humanAge = 24 + (dogAge - 2) * 5;
    }

    alert(`Your dog ${dogName}, is approximately ${humanAge} years old in human years.`);
} else{
    alert("The average lifespan for dogs is between 10–13 years, though there is variability among breeds and sizes. As a species, the domestic dog is incredibly diverse in size, build, and appearance, thanks to human intervention.")
}
    
}
document.querySelector(".submitBtn").addEventListener("click", calDogAge);