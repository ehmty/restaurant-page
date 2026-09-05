export function showHome() {
    const content = document.querySelector("#content");

    const header = document.createElement("h1");
    const subheader = document.createElement("h2");
    const para1 = document.createElement("p");
    const para2 = document.createElement("p");

    header.textContent = "The Den";
    subheader.textContent = "Good coffee. Fresh pastries. Slow mornings.";
    para1.textContent = `Welcome to The Den, a cozy neighborhood café serving freshly roasted coffee, 
                        homemade pastries and simple breakfast favorites in a relaxed atmosphere.`
                        
    para2.textContent = `Whether you're here for a quick espresso, a buttery croissant or a quiet
                        afternoon break, The Den is a place to slow down and stay a little longer.`

    content.append(header, subheader, para1, para2);

}