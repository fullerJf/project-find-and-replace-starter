const findInput = document.querySelector(".find-input");
const replaceInput = document.querySelector(".replace-input");
const replaceAllButton = document.querySelector(".replace-all-button");
const replaceOneButton = document.querySelector(".replace-One-button");

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row");

// YOUR CODE GOES HERE

function getCellElements(currentRowElement) {
  return currentRowElement.querySelectorAll(".cell");
}
replaceAllButton.addEventListener("click", function () {
  console.log("+ button clicked");
  let find = findInput.value;
  let replace = replaceInput.value;

  for (let i = 0; i < rowElements.length; i++) {
    const element = rowElements[i];
    let cells = getCellElements(rowElements[i]);

    for (let j = 0; j < cells.length; j++) {
      //console.log(cells[j]);
      if (cells[j].innerHTML.includes(find)) {
        cells[j].innerHTML = cells[j].innerHTML.replace(find, replace);
      }
    }
  }
});
replaceOneButton.addEventListener("click", function () {
  console.log("+ button clicked");
});
/// couldnt finish the Stretch Goal but i made the button an click event :)//
