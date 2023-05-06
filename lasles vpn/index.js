var letIndex = 1;
var allReviewer = document.querySelectorAll(".reviewer-item");
var allReviewerLength = allReviewer.length;
var widthReviewer = document.querySelector(".reviewer-item").offsetWidth;

function nextReviewer(n) {
  showReviewer((letIndex += n));
}

var prevButton = document
  .querySelector(".prev")
  .addEventListener("click", () => {
    nextReviewer(-1);
  });
var nextButton = document
  .querySelector(".next")
  .addEventListener("click", () => {
    nextReviewer(1);
  });

function showReviewer(n = letIndex) {
  if (n > allReviewerLength) {
    letIndex = 1;
  } else if (n < 1) {
    letIndex = allReviewerLength;
  }

  // remove all property when click
  for (let i = 0; i < allReviewerLength; i++) {
    allReviewer[i].classList.remove("focus");
  }

  // add property
  allReviewer[letIndex - 1].classList.add("focus");

  // move next
  var moveNext = -(n - 1) * (widthReviewer + 40);
  for (let i = 0; i < allReviewerLength; i++) {
    allReviewer[i].style.transform = `translateX(${moveNext}px)`;
  }
}
