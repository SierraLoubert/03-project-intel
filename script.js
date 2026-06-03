function checkDirection() {

  const htmlLang =
    document.documentElement.lang;

  const rtlLanguages =
    ["ar","he","fa","ur"];

  if (rtlLanguages.includes(htmlLang)) {

    document.documentElement.setAttribute(
      "dir",
      "rtl"
    );

  } else {

    document.documentElement.setAttribute(
      "dir",
      "ltr"
    );

  }

}

checkDirection();

const observer =
  new MutationObserver(checkDirection);

observer.observe(
  document.documentElement,
  {
    attributes: true,
    attributeFilter: ["lang"]
  }
);
