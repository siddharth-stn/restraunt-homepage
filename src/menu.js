const menu = (function () {
    const content = document.getElementById("content");
    const header_list = document.getElementById("header-list");
    const anchor_home = document.getElementById("home-tab").firstElementChild;
    const anchor_contact = document.getElementById("contact-tab").firstElementChild;
    const anchor_menu = document.getElementById("menu-tab").firstElementChild;
    
    //Create Elements for menu tab
    const menu_div = document.createElement("div");
    const title = document.createElement("p");
    const item_one = document.createElement("p");
    const item_two = document.createElement("p");
    const item_three = document.createElement("p");

    menu_div.id = "menu_div";
    title.id = "title";
    item_one.id = "item_one";
    item_two.id = "item_two";
    item_three.id = "item_three";


    title.textContent = "MENU";
    item_one.innerHTML = "STARTER";
    item_two.innerHTML = "MAIN COURSE";
    item_three.innerHTML = "DESERT";

    header_list.addEventListener('click', (e) => {
        if (e.target.parentElement.id ==  "menu-tab") {
            if (menu_div) {menu_div.style.display = "flex"};
            
            const contact_div = document.getElementById("contact_div");
            if (contact_div) {contact_div.style.display = "none"};

            const home_div = document.getElementById("home_div");
            if(home_div) {home_div.style.display = "none"};

            menu_div.appendChild(title);
            menu_div.appendChild(item_one);
            menu_div.appendChild(item_two);
            menu_div.appendChild(item_three);

            content.appendChild(menu_div);

            anchor_home.classList.remove("focus");
            anchor_contact.classList.remove("focus");
            anchor_menu.classList.add("focus");
        }
    });
})();


module.exports = menu;