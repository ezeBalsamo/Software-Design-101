let themeModeDescription = "theme-mode";
let darkThemeClassName = "dark-theme";
let lightThemeClassName = "light-theme";

function bodyClasses() {
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
  classes.remove(oppositeThemeOf(aThemeClassName));
  classes.add(aThemeClassName);
  localStorage.setItem(themeModeDescription, aThemeClassName);
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

function switchThemeAccordingToUserPreference() {
  let darkThemeMediaMatcher = window.matchMedia("(prefers-color-scheme: dark)");
  darkThemeMediaMatcher.matches ? switchToDarkTheme() : switchToLightTheme();
}

let potentialThemeClassName = localStorage.getItem(themeModeDescription);
potentialThemeClassName === null
  ? switchThemeAccordingToUserPreference()
  : switchToThemeNamed(potentialThemeClassName);

document
  .getElementById("toggle_dark_light_mode")
  .addEventListener("click", switchTheme);
