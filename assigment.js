function consoleLog() {
    console.log("click received!")
}

var button = document.getElementById("hire-me");
button.addEventListener("click", consoleLog);

var drop_items = document.getElementsByClassName("dropdown-item");
for (var i = 0; i < drop_items.length; i++) { 
    drop_items[i].addEventListener("click", consoleLog);
} 

var menu_items = document.getElementsByClassName("nav-link");
for (var i = 0; i < menu_items.length; i++) { 
    menu_items[i].addEventListener("click", consoleLog);
} 

var project_items = document.getElementsByClassName("project-item");
for (var i = 0; i < project_items.length; i++) { 
    project_items[i].addEventListener("click", consoleLog);
} 