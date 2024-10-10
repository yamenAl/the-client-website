function toggleVisibility(divId1, divId2) {
    var x = document.getElementById(divId1);
    var y = document.getElementById(divId2);

    if (x.style.display === "none" && y.style.display === "none") {
        x.style.display = "block";
        y.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "none";
    }
}