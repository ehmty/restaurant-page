export function showAbout() {
    const content = document.querySelector("#content");
    content.textContent = "";
    
    const aboutContainer = document.createElement("div");

    const title = document.createElement("h1");
    const intro = document.createElement("p");
    const text = document.createElement("p");
    const opening = document.createElement("h2");
    const weekdays = document.createElement("p");
    const weekend = document.createElement("p");

    title.textContent = "About The Den";
    intro.textContent = "The Den is a small neighborhood café built around good coffee, fresh food and a relaxed atmosphere.";
    text.textContent = "We keep things simple: quality ingredients, freshly prepared food and a comfortable place to slow down for a while.";
    opening.textContent = "Opening Hours:";
    weekdays.textContent = "Monday - Friday: 07:30 - 18:00";
    weekend.textContent = "Saturday - Sunday: 09:00 - 17:00";

    aboutContainer.append(title, intro, text, opening, weekdays, weekend);
    content.append(aboutContainer);
}