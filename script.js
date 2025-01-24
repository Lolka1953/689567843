let SwitchMode = document.getElementById(button-74)

SwitchMode.onclick = function () {
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "ModeLight.css") {
        theme.href = "ModeDark.css";
    } else {
        theme.href = "ModeLight.css";
    }
}
