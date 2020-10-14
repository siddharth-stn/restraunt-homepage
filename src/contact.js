const contact = (function () {
    const content = document.getElementById("content");
    
    const header_list = document.getElementById("header-list");
    const anchor_home = document.getElementById("home-tab").firstElementChild;
    const anchor_menu = document.getElementById("menu-tab").firstElementChild;
    const anchor_contact = document.getElementById("contact-tab").firstElementChild;
    
    //create contact div to display when contact tab is clicked
    const contact_div = document.createElement("div");
    const contact_title = document.createElement("p");
    const contact_mobile = document.createElement("p");
    const contact_address = document.createElement("p");

    contact_div.id = "contact_div";
    contact_title.id = "contact_title";
    contact_mobile.id = "contact_mobile";
    contact_address.id = "contact_address";

    contact_title.innerHTML = "Contact Us";
    contact_mobile.innerHTML = "Mobile No: 777xxxxxx6";
    contact_address.innerHTML = "Ram Lalla Colony, Hindustan (SUS)";


    header_list.addEventListener('click', (e) => {
        if (e.target.parentElement.id == "contact-tab") {
            anchor_contact.classList.add("focus");
            anchor_menu.classList.remove("focus");
            anchor_home.classList.remove("focus");

            if (contact_div) {contact_div.style.display = "flex"};

            const menu_div = document.getElementById("menu_div");
            if (menu_div) {menu_div.style.display = "none"};

            const home_div = document.getElementById("home_div");
            if(home_div) {home_div.style.display = "none"};

            contact_div.appendChild(contact_title);
            contact_div.appendChild(contact_mobile);
            contact_div.appendChild(contact_address);

            content.appendChild(contact_div);
        }
    });

})();

module.exports = contact;