
const page_load = (function () {
    const content = document.getElementById("content");

    const header = document.createElement("header");
    const header_list = document.createElement("ul");
    const list_item_home = document.createElement("li");
    const list_item_menu = document.createElement("li");
    const list_item_contact = document.createElement("li");
    const anchor_home = document.createElement("a");
    const anchor_menu = document.createElement("a");
    const anchor_contact = document.createElement("a");

    anchor_home.tabIndex = 0;
    anchor_menu.tabIndex = 1;
    anchor_contact.tabIndex = 2;

    header.id = "page-header";
    header_list.id = "header-list";
    list_item_home.id = "home-tab";
    list_item_menu.id = "menu-tab";
    list_item_contact.id = "contact-tab";

    anchor_home.innerHTML = "Home";
    anchor_menu.innerHTML = "Menu";
    anchor_contact.innerHTML = "Contact";

    anchor_home.classList.add("focus");

    anchor_home.addEventListener('click', (e) => {
        if (e.target.parentElement.id == "home-tab") {
            const menu_div = document.getElementById("menu_div");
            const contact_div = document.getElementById("contact_div");
            const home_div = document.getElementById("home_div");

            if(menu_div || contact_div) {
                menu_div.style.display = "none";
                if (contact_div) {
                    contact_div.style.display = "none";
                }
                home_div.style.display = "flex"; 
            } 

            anchor_menu.classList.remove("focus");
            anchor_contact.classList.remove("focus");
            anchor_home.classList.add("focus");
        }
    });

    function home_div () {
        const home_div = document.createElement("div");
        const intro_title = document.createElement("p");
        const intro_detail = document.createElement("p");

        home_div.id = "home_div";
        intro_title.id = "intro_title";
        intro_detail.id = "intro_detail";

        intro_title.innerHTML = "Simplicity and Style";
        intro_detail.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod praesentium quam cum autem quae dicta ullam adipisci minima, aut repellendus eligendi iste nam ab, quos commodi. Sed quisquam, optio ratione."

        home_div.appendChild(intro_title);
        home_div.appendChild(intro_detail);

        content.appendChild(home_div);
    }

    list_item_home.appendChild(anchor_home);
    list_item_menu.appendChild(anchor_menu);
    list_item_contact.appendChild(anchor_contact);

    header_list.appendChild(list_item_home);
    header_list.appendChild(list_item_menu);
    header_list.appendChild(list_item_contact);

    header.appendChild(header_list);

    content.appendChild(header);

    home_div(); //set content in the home page

})();

module.exports = page_load;