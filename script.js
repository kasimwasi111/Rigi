const tabButtons = document.querySelectorAll(".btn_tab");
const tabContents = document.querySelectorAll(
  ".community, .courses, .consultation"
);

// Display default tab
tabContents[0].style.display = "block";
tabButtons[0].classList.add("active");

// Add click event listeners to tab buttons
tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    // Hide all tab contents
    tabContents.forEach((content) => {
      content.style.display = "none";
    });

    // Deactivate all tab buttons
    tabButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Display the selected tab content
    tabContents[index].style.display = "block";
    button.classList.add("active");
  });
});
