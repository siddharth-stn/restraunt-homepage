
const page_load = (function () {
    const content = document.getElementById("content");

    const header = document.createElement("header");
    const header_list = document.createElement("ul");
    const list_item_home = document.createElement("li");
    const list_item_menu = document.createElement("li");
    const list_item_contact = document.createElement("li");

    header.id = "page-header";
    header_list.id = "header-list";
    list_item_home.id = "home-tab";
    list_item_menu.id = "menu-tab";
    list_item_contact.id = "contact-tab";

    list_item_home.innerHTML = "Home";
    list_item_menu.innerHTML = "Menu";
    list_item_contact.innerHTML = "Contact";


    header_list.appendChild(list_item_home);
    header_list.appendChild(list_item_menu);
    header_list.appendChild(list_item_contact);

    header.appendChild(header_list);

    content.appendChild(header);
})();

module.exports = page_load;