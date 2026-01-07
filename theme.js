const toggleBtn = document.getElementById("theme_toggle");
const root = document.documentElement;
const icon = toggleBtn.querySelector("img"); // select img inside button

//Applying saved theme if website has record
const savedTheme = localStorage.getItem("theme");
icon.src = savedTheme === "light" ? "Dark_Icon.png" : "Light_Icon.png";
if (savedTheme === "light")root.setAttribute("data-theme", "light"); 

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    const isDark = root.getAttribute("data-theme") === "light";
    const next = isDark ? "" : "light";

    if (next){
        root.setAttribute("data-theme", next);
        icon.src = "Dark_Icon.png"
    } 
    else{
        root.removeAttribute("data-theme");
        icon.src = "Light_Icon.png"
    } 

    localStorage.setItem("theme", next);
  });
}