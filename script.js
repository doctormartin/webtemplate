// Show popup ad after 3 seconds
setTimeout(function() {
    document.getElementById("adPopup").style.display = "flex";
}, 3000);

// Close the ad popup
function closeAdPopup() {
    document.getElementById("adPopup").style.display = "none";
}
