function myFunction() {
    var x = 
    document.getElementById("navitems");
    if (x.className === "navbar_items") {
        x.className += " responsive";
    }
    else {
        x.className = "navbar_items"
    }
}
