export function showMenu() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const coffeeSection = document.createElement("div");
    coffeeSection.classList.add("menu-section");

    const foodSection = document.createElement("div");
    foodSection.classList.add("menu-section");
    
    const menu = document.createElement("h1");
    const coffee = document.createElement("h2");
    const food = document.createElement("h2");
    const coffee1 = document.createElement("h3");
    const coffee2 = document.createElement("h3");
    const coffee3 = document.createElement("h3");
    const food1 = document.createElement("h3");
    const food2 = document.createElement("h3");
    const food3 = document.createElement("h3");
    const coffee1Text = document.createElement("p");
    const coffee2Text = document.createElement("p");
    const coffee3Text = document.createElement("p");
    const food1Text = document.createElement("p");
    const food2Text = document.createElement("p");
    const food3Text = document.createElement("p");

    menu.textContent = "Menu";
    coffee.textContent = "Coffee";
    food.textContent = "Food";
    coffee1.textContent = "Espresso";
    coffee2.textContent = "Cappuccino";
    coffee3.textContent = "Flat White";
    food1.textContent = "Butter Croissant";
    food2.textContent = "Cinnamon Roll";
    food3.textContent = "Avocado Toast";
    coffee1Text.textContent = "Rich, smooth and simple.";
    coffee2Text.textContent = "Espresso with steamed milk and a soft layer of foam.";
    coffee3Text.textContent = "Double espresso with silky steamed milk.";
    food1Text.textContent = "Freshly baked and perfectly flaky.";
    food2Text.textContent = "Soft dough, cinnamon and a light glaze.";
    food3Text.textContent = "Sourdough toast with avocado, herbs and a touch of lemon.";

    coffeeSection.append(coffee, coffee1, coffee1Text, coffee2, coffee2Text, coffee3, coffee3Text);
    foodSection.append(food, food1, food1Text, food2, food2Text, food3, food3Text);
    menuContainer.append(menu, coffeeSection, foodSection);
    content.append(menuContainer);
}