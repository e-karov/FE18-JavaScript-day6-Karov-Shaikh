var sandwiches = {"sandwich": "Hamburger", "calories": "260"};
var fries = {"fries_size": "Large French Fries", "calories": "570"};

(function printMessage() {
    let message = `My favorite sandwich is ${sandwiches.sandwich} which has approximately ${sandwiches.calories} calories, along with it I enjoy eating ${fries.fries_size} which have about ${fries.calories} calories.`;

    let result = document.getElementsByTagName("h3")[0];
    result.innerHTML = message;
})();