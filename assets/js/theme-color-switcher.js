let darkThemeClassName = "dark-theme";
let lightThemeClassName = "light-theme";

function bodyClasses(){
  return document.body.classList;
}

function currentThemeClassName() {
  return bodyClasses()[0];
}

function oppositeThemeOf(aThemeClassName) {
  return aThemeClassName === darkThemeClassName
    ? lightThemeClassName
    : darkThemeClassName;
}

function switchToThemeNamed(aThemeClassName) {
  let classes = bodyClasses();
  classes.remove(oppositeThemeOf(aThemeClassName))
  classes.add(aThemeClassName);
}

function switchToDarkTheme() {
  switchToThemeNamed(darkThemeClassName);
}

function switchToLightTheme() {
  switchToThemeNamed(lightThemeClassName);
}

function switchThemeAccordingTo(aBoolean) {
  aBoolean ? switchToDarkTheme() : switchToLightTheme();
}

function switchTheme() {
  switchToThemeNamed(oppositeThemeOf(currentThemeClassName()));
}

let darkSchemeMediaMatcher = window.matchMedia("(prefers-color-scheme: dark)");
switchThemeAccordingTo(darkSchemeMediaMatcher.matches);

document
  .getElementById("toggle_dark_light_mode")
  .addEventListener("click", switchTheme);
