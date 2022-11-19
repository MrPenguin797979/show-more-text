const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

Element.prototype.insertAfter = function (insertElement, currentElement) {
  currentElement.parentNode.insertBefore(insertElement, currentElement);
  currentElement.remove();
  insertElement.parentNode.insertBefore(currentElement, insertElement);
};

function ShowMoreText({
  textSelector,
  fontSize = 16,
  lineHeight = 1.6,
  lineClamp = 5,
  showMoreText = "See more",
  hideText = "See less",
}) {
  const textElements = $$(textSelector);

  if (!textElements || textElements.length <= 0) {
    console.error("Can not find element!");
    return;
  }

  const maxTextElementHeight = fontSize * lineHeight * lineClamp;

  textElements.forEach((textElement) => {
    Object.assign(textElement.style, {
      fontSize: `${fontSize}px`,
      lineHeight: lineHeight,
      overflow: "hidden",
    });

    const textElementHeight = textElement.offsetHeight;
    const showMoreBtn = document.createElement("button");

    showMoreBtn.classList.add("show-more");
    showMoreBtn.textContent = showMoreText;

    if (textElementHeight > maxTextElementHeight) {
      textElement.parentNode.insertAfter(showMoreBtn, textElement);
      textElement.style.height = `${maxTextElementHeight}px`;
    }
  });

  const showMoreElements = $$(".show-more");
  let newMaxTextElementHeight = maxTextElementHeight;
  let isShow = true;

  showMoreElements?.forEach((showMoreElement) => {
    showMoreElement?.addEventListener("click", function () {
      const textElement = showMoreElement.previousElementSibling;
      const scrollHeight = textElement.scrollHeight;

      if (isShow) {
        newMaxTextElementHeight += maxTextElementHeight;

        if (newMaxTextElementHeight >= scrollHeight) {
          textElement.style.height = `${scrollHeight}px`;
          isShow = false;
        } else {
          textElement.style.height = `${newMaxTextElementHeight}px`;
        }
      } else {
        newMaxTextElementHeight = maxTextElementHeight;
        textElement.style.height = `${newMaxTextElementHeight}px`;
        isShow = true;
      }

      showMoreElement.textContent = isShow ? showMoreText : hideText;
    });
  });
}
