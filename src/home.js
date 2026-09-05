export function showHome() {
    const content = document.querySelector("#content");
    content.textContent = "";

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container")

    const header = document.createElement("h1");
    header.classList.add("header")
    const subheader = document.createElement("h2");
    subheader.classList.add("subheader")
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");
    para1.classList.add("para")
    para2.classList.add("para")

    header.textContent = "The Den";
    subheader.textContent = "Good coffee. Fresh pastries. Slow mornings.";
    para1.textContent = `Welcome to The Den, a cozy neighborhood café serving freshly roasted coffee, 
                        homemade pastries and simple breakfast favorites in a relaxed atmosphere.`
                        
    para2.textContent = `Whether you're here for a quick espresso, a buttery croissant or a quiet
                        afternoon break, The Den is a place to slow down and stay a little longer.`

    homeContainer.append(header, subheader, para1, para2);
    content.append(homeContainer);
}