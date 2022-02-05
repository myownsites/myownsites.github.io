const systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
const lightCode = '#fcfcfc';
const darkCode = '#1e2327';

let theme = localStorage.getItem('theme');
if (theme === "light") {
  modeSwitcher(0);
} else if (theme === "dark") {
  modeSwitcher(1);
} else if (theme === "softlight") {
  modeSwitcher(3);
} else if (theme === "softdark") {
  modeSwitcher(4);
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
    modeSwitcher(0);
  } else {
    modeSwitcher(1);
  }
}

systemInitiatedDark.addListener(prefersColorTest);

function modeSwitcher(mode) {
  switch (mode) {
  case 0:
    document.documentElement.setAttribute('data-theme', 'light');
    changeMetaThemeColor(lightCode);
    //document.getElementsByClassName('fb-comments')[0].setAttribute('data-colorscheme', 'light');
    localStorage.setItem('theme', 'light');
    break;
  case 1:
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    changeMetaThemeColor(darkCode);
    //document.getElementsByClassName('fb-comments')[0].setAttribute('data-colorscheme', 'dark');
    break;
  case 3:
    document.documentElement.setAttribute('data-theme', 'softlight');
    localStorage.setItem('theme', 'softlight');
    changeMetaThemeColor(lightCode);
    //document.getElementsByClassName('fb-comments')[0].setAttribute('data-colorscheme', 'light');
    break;
  case 4:
    document.documentElement.setAttribute('data-theme', 'softdark');
    localStorage.setItem('theme', 'softdark');
    changeMetaThemeColor(darkCode);
    //document.getElementsByClassName('fb-comments')[0].setAttribute('data-colorscheme', 'dark');
    break;
  }
}

function changeMetaThemeColor(color) {
    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", color);
}
