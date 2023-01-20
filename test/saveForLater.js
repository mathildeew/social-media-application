export function saveForLater(leftoverChili) {
  try {
    const whatsInTheFridge = localStorage.getItem("mealPrepOfTheWeek");
    if (whatsInTheFridge === undefined) {
      // if our fridge is empty, chili's on the menu 🌶
      localStorage.setItem("mealPrepOfTheWeek", leftoverChili);
    } else {
      // otherwise, we'll just bring it to our neighbor's potluck 🍽
      goToPotluck(leftoverChili);
    }
  } catch {
    // if something went wrong, we're going to the potluck empty-handed 😬
    goToPotluck();
  }
}

function goToPotluck() {
  console.log("Going to Potluck");
}
